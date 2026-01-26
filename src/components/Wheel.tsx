import React, { useState, useRef, useEffect } from "react";

type Props = { 
  items: string[]; 
  onSelect: (name: string) => void; 
  language: "fr" | "en" 
};

export const Wheel: React.FC<Props> = ({ items, onSelect, language }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [spinning, setSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);
  const animationRef = useRef<number>();

  // Couleurs vibrantes pour les segments
  const colors = [
    '#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', 
    '#98D8C8', '#F7DC6F', '#BB8FCE', '#85C1E2',
    '#F8B739', '#52B788', '#E63946', '#457B9D',
    '#F1C40F', '#9B59B6', '#3498DB', '#E74C3C'
  ];

  // Dessiner la roue
  const drawWheel = (currentRotation: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = Math.min(centerX, centerY) - 20;

    // Effacer le canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Dessiner les segments
    const segmentAngle = (2 * Math.PI) / items.length;
    
    items.forEach((item, index) => {
      const startAngle = index * segmentAngle + currentRotation;
      const endAngle = startAngle + segmentAngle;

      // Segment coloré
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.arc(centerX, centerY, radius, startAngle, endAngle);
      ctx.closePath();
      ctx.fillStyle = colors[index % colors.length];
      ctx.fill();
      
      // Bordure du segment
      ctx.strokeStyle = '#fff';
      ctx.lineWidth = 2;
      ctx.stroke();

      // Texte du segment
      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(startAngle + segmentAngle / 2);
      ctx.textAlign = 'right';
      ctx.fillStyle = '#fff';
      ctx.font = 'bold 14px system-ui';
      ctx.shadowColor = 'rgba(0,0,0,0.5)';
      ctx.shadowBlur = 3;
      
      // Limiter la longueur du texte
      const displayText = item.length > 15 ? item.substring(0, 13) + '...' : item;
      ctx.fillText(displayText, radius - 15, 5);
      ctx.restore();
    });

    // Cercle central décoratif
    ctx.beginPath();
    ctx.arc(centerX, centerY, 30, 0, 2 * Math.PI);
    ctx.fillStyle = '#667eea';
    ctx.fill();
    ctx.strokeStyle = '#fff';
    ctx.lineWidth = 3;
    ctx.stroke();

    // Texte central
    ctx.fillStyle = '#fff';
    ctx.font = 'bold 16px system-ui';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('🎵', centerX, centerY);

    // Pointeur/flèche en haut
    ctx.save();
    ctx.translate(centerX, 15);
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(-15, -15);
    ctx.lineTo(15, -15);
    ctx.closePath();
    ctx.fillStyle = '#FF6B6B';
    ctx.fill();
    ctx.strokeStyle = '#fff';
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.restore();
  };

  // Animation de la roue
  useEffect(() => {
    drawWheel(rotation);
  }, [rotation, items]);

  // Redessiner lors du resize
  useEffect(() => {
    const handleResize = () => drawWheel(rotation);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [rotation, items]);

  const spin = () => {
    if (!items.length || spinning) return;
    
    setSpinning(true);

    // Paramètres de l'animation
    const minSpins = 5; // Nombre minimum de tours complets
    const maxSpins = 8;
    const totalSpins = minSpins + Math.random() * (maxSpins - minSpins);
    const duration = 4000; // 4 secondes
    const startTime = Date.now();
    const startRotation = rotation;
    
    // Sélectionner l'item gagnant
    const winningIndex = Math.floor(Math.random() * items.length);
    const segmentAngle = (2 * Math.PI) / items.length;
    
    // Calculer la rotation finale pour atterrir sur l'item sélectionné
    // Le pointeur est en haut (angle = -π/2), on veut que le centre du segment soit là
    const targetAngle = -(winningIndex * segmentAngle + segmentAngle / 2) - Math.PI / 2;
    const finalRotation = startRotation + (totalSpins * 2 * Math.PI) + (targetAngle - startRotation);

    const animate = () => {
      const now = Date.now();
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Fonction d'easing pour décélération réaliste (ease-out cubic)
      const easeOut = 1 - Math.pow(1 - progress, 3);
      
      const currentRotation = startRotation + (finalRotation - startRotation) * easeOut;
      setRotation(currentRotation);

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        setSpinning(false);
        onSelect(items[winningIndex]);
      }
    };

    animationRef.current = requestAnimationFrame(animate);
  };

  // Cleanup animation
  useEffect(() => {
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div style={{ display: "grid", gap: 16, justifyItems: "center" }}>
      <div style={styles.wheelContainer}>
        <canvas 
          ref={canvasRef} 
          width={400} 
          height={400}
          style={styles.canvas}
        />
      </div>
      
      <button 
        onClick={spin} 
        disabled={spinning} 
        style={{
          ...styles.spinButton,
          ...(spinning ? styles.spinButtonDisabled : {})
        }}
      >
        {spinning 
          ? (language === "fr" ? "🎡 Ça tourne..." : "🎡 Spinning...") 
          : "🎡 " + (language === "fr" ? "Lancer la roue" : "Spin the wheel")
        }
      </button>
      
      <div style={styles.itemCount}>
        {language === "fr" 
          ? `${items.length} possibilité${items.length > 1 ? 's' : ''}` 
          : `${items.length} option${items.length > 1 ? 's' : ''}`
        }
      </div>
    </div>
  );
};

const styles: Record<string, React.CSSProperties> = {
  wheelContainer: {
    position: 'relative',
    width: '100%',
    maxWidth: 400,
    aspectRatio: '1/1',
    borderRadius: '50%',
    boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
    background: '#fff',
    padding: 10,
  },
  canvas: {
    width: '100%',
    height: '100%',
    borderRadius: '50%',
  },
  spinButton: {
    padding: "12px 24px",
    borderRadius: 12,
    border: "none",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    color: "#fff",
    cursor: "pointer",
    fontSize: 16,
    fontWeight: 600,
    boxShadow: "0 4px 15px rgba(102, 126, 234, 0.4)",
    transition: "all 0.3s ease",
  },
  spinButtonDisabled: {
    opacity: 0.6,
    cursor: "not-allowed",
    transform: "scale(0.98)",
  },
  itemCount: {
    fontSize: 13,
    color: "#666",
    fontWeight: 500,
  }
};
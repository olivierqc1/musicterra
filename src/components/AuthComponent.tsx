'use client';

import React, { useState, useEffect } from 'react';
import { auth, db } from '../lib/firebaseConfig';
import { 
  sendSignInLinkToEmail, 
  isSignInWithEmailLink, 
  signInWithEmailLink,
  signOut 
} from 'firebase/auth';
import { doc, setDoc, getDoc, serverTimestamp } from 'firebase/firestore';

export default function AuthComponent() {
  const [email, setEmail] = useState('');
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [listeningData, setListeningData] = useState({
    currentTrack: '',
    duration: 0,
    history: [] as any[]
  });

  const actionCodeSettings = {
    url: typeof window !== 'undefined' ? window.location.origin : '',
    handleCodeInApp: true,
  };

  useEffect(() => {
    if (typeof window !== 'undefined' && isSignInWithEmailLink(auth, window.location.href)) {
      let emailForSignIn = window.localStorage.getItem('emailForSignIn');
      if (!emailForSignIn) {
        emailForSignIn = window.prompt('Veuillez confirmer votre email');
      }
      
      if (emailForSignIn) {
        signInWithEmailLink(auth, emailForSignIn, window.location.href)
          .then((result) => {
            window.localStorage.removeItem('emailForSignIn');
            setUser(result.user);
            loadUserData(result.user.uid);
            setMessage('✅ Connexion réussie !');
          })
          .catch((error) => {
            setMessage('❌ Erreur de connexion: ' + error.message);
          });
      }
    }

    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        loadUserData(user.uid);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleSendLink = async () => {
    if (!email) {
      setMessage('❌ Veuillez entrer un email');
      return;
    }

    setLoading(true);
    setMessage('');

    try {
      await sendSignInLinkToEmail(auth, email, actionCodeSettings);
      if (typeof window !== 'undefined') {
        window.localStorage.setItem('emailForSignIn', email);
      }
      setMessage('✉️ Email envoyé ! Vérifiez votre boîte de réception.');
      setEmail('');
    } catch (error: any) {
      setMessage('❌ Erreur: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  const loadUserData = async (userId: string) => {
    try {
      const docRef = doc(db, 'users', userId);
      const docSnap = await getDoc(docRef);
      
      if (docSnap.exists()) {
        const data = docSnap.data();
        setListeningData(data.listeningData || {
          currentTrack: '',
          duration: 0,
          history: []
        });
      }
    } catch (error) {
      console.error('Erreur de chargement:', error);
    }
  };

  const saveListeningData = async () => {
    if (!user) return;

    try {
      const docRef = doc(db, 'users', user.uid);
      await setDoc(docRef, {
        email: user.email,
        listeningData: listeningData,
        lastUpdated: serverTimestamp()
      }, { merge: true });
      
      setMessage('💾 Données sauvegardées !');
      setTimeout(() => setMessage(''), 3000);
    } catch (error: any) {
      setMessage('❌ Erreur de sauvegarde: ' + error.message);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      setListeningData({ currentTrack: '', duration: 0, history: [] });
      setMessage('👋 Déconnecté');
    } catch (error: any) {
      setMessage('❌ Erreur: ' + error.message);
    }
  };

  const addToHistory = () => {
    if (!listeningData.currentTrack) {
      setMessage('⚠️ Veuillez entrer un titre');
      return;
    }
    
    setListeningData(prev => ({
      currentTrack: '',
      duration: 0,
      history: [
        { 
          track: prev.currentTrack, 
          duration: prev.duration,
          timestamp: new Date().toISOString()
        },
        ...prev.history.slice(0, 9)
      ]
    }));
    
    setMessage('✅ Ajouté à l\'historique');
    setTimeout(() => setMessage(''), 2000);
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              🎵 Authentification
            </h1>
            <p className="text-gray-600">
              Connectez-vous avec votre email
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Adresse email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendLink()}
                placeholder="votre@email.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition"
              />
            </div>

            <button
              onClick={handleSendLink}
              disabled={loading}
              className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition"
            >
              {loading ? '⏳ Envoi en cours...' : '📧 Envoyer le lien de connexion'}
            </button>
          </div>

          {message && (
            <div className={`mt-4 p-4 rounded-lg ${
              message.includes('❌') 
                ? 'bg-red-50 text-red-700' 
                : 'bg-green-50 text-green-700'
            }`}>
              {message}
            </div>
          )}

          <div className="mt-6 text-sm text-gray-500 text-center">
            Un lien de connexion sera envoyé à votre email
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="flex justify-between items-center mb-8 flex-wrap gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-800">
                🎵 Mes Écoutes
              </h1>
              <p className="text-gray-600 mt-1">
                Connecté: {user.email}
              </p>
            </div>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition"
            >
              Déconnexion
            </button>
          </div>

          {message && (
            <div className={`mb-4 p-4 rounded-lg ${
              message.includes('❌') || message.includes('⚠️')
                ? 'bg-red-50 text-red-700' 
                : 'bg-green-50 text-green-700'
            }`}>
              {message}
            </div>
          )}

          <div className="space-y-6">
            <div className="bg-purple-50 p-6 rounded-xl">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                En cours d'écoute
              </h2>
              <div className="space-y-4">
                <input
                  type="text"
                  value={listeningData.currentTrack}
                  onChange={(e) => setListeningData(prev => ({
                    ...prev,
                    currentTrack: e.target.value
                  }))}
                  placeholder="Nom de la chanson ou podcast"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
                />
                <div className="flex gap-2">
                  <input
                    type="number"
                    value={listeningData.duration}
                    onChange={(e) => setListeningData(prev => ({
                      ...prev,
                      duration: parseInt(e.target.value) || 0
                    }))}
                    placeholder="Durée (minutes)"
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
                  />
                  <button
                    onClick={addToHistory}
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition whitespace-nowrap"
                  >
                    ➕ Ajouter
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounde

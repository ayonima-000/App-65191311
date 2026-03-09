'use client';

import { useEffect, useState } from 'react';
import SplashScreen from '@/components/SplashScreen';

export default function Home() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);

  useEffect(() => {
    // Register Service Worker
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker
          .register('/sw.js')
          .then((registration) => {
            console.log('Service Worker registered:', registration.scope);
          })
          .catch((error) => {
            console.log('Service Worker registration failed:', error);
          });
      });
    }

    // Install Prompt
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', () => {
      console.log('Aplikasi berhasil diinstall');
      setDeferredPrompt(null);
    });

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const startLogin = () => {
    window.open(
      'https://kjgkhl4g8khklhgahkplajqucpkznshahkplajqucpkznshahsk0oejhoishbugib79ohjtt.21252425.xxxxx17210315.xyz/cgi-sys/suspendedpage.cgi',
      '_blank',
      'noopener,noreferrer'
    );
  };

  const resetData = () => {
    if (confirm('Reset semua data aplikasi?')) {
      localStorage.clear();
      sessionStorage.clear();
      alert('Data aplikasi telah direset');
    }
  };

  const keluarAplikasi = () => {
    if (confirm('Keluar dari aplikasi?')) {
      if (
        (window.navigator as any).standalone ||
        window.matchMedia('(display-mode: standalone)').matches
      ) {
        if (window.navigator.userAgent.includes('iPhone')) {
          alert('Tekan tombol Home untuk keluar');
        } else {
          window.close();
        }
      } else {
        window.location.href = 'about:blank';
      }
    }
  };

  const installApp = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') {
      console.log('User accepted install');
    }
    setDeferredPrompt(null);
  };

  return (
    <>
      <SplashScreen />
      
      <div className="app-shell">
        <div className="main-content" id="mainView">
          {/* Layer 1 - Green Header */}
          <div className="layer-1-green">
            <div className="logo-container">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logosmk.png" alt="Logo Header" />
              <h2>SMK TAMAN ILMU</h2>
            </div>
          </div>

          {/* Layer 2 - Image Backdrop */}
          <div className="layer-2-image" />

          {/* Layer 3 - White Body */}
          <div className="layer-3-white">
            <div className="marquee-wrap">
              <div 
                dangerouslySetInnerHTML={{ 
                  __html: '<marquee scrollamount="3">Selamat datang di Aplikasi Exam_SMK_Tamil</marquee>' 
                }} 
              />
            </div>

            <div className="menu-list">
              {deferredPrompt && (
                <button 
                  onClick={installApp}
                  className="btn btn-green"
                  style={{ margin: '10px auto', width: '90%' }}
                >
                  <span>Install Aplikasi</span>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/exam.png" alt="install" />
                </button>
              )}

              <button onClick={startLogin} className="btn btn-green">
                <span>Login</span>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/exam.png" alt="login" />
              </button>

              <button onClick={resetData} className="btn btn-green">
                <span>Reset Data Aplikasi</span>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/reset.png" alt="reset" />
              </button>

              <button onClick={keluarAplikasi} className="btn btn-grey">
                <span>Keluar Aplikasi</span>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/close.png" alt="close" />
              </button>
            </div>

            <div className="footer">Versi 2.0</div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .app-shell {
          width: 100%;
          max-width: 412px;
          height: 100vh;
          position: relative;
          background-color: #059363;
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }

        .main-content {
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .layer-1-green {
          height: 22%;
          background-color: #059363;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          color: white;
          padding-top: 5px;
          padding-bottom: 0;
          position: relative;
          z-index: 3;
        }

        .logo-container {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .logo-container img {
          width: 115px;
          margin-bottom: 8px;
        }

        .logo-container h2 {
          padding-top: 5px;
          font-size: 1.1rem;
          font-weight: 800;
          letter-spacing: 1px;
          margin: 0;
        }

        .layer-2-image {
          height: 32%;
          width: 100%;
          background: url("/test.png") no-repeat center;
          background-size: cover;
          position: relative;
          z-index: 1;
          margin-top: -28px;
        }

        .layer-3-white {
          flex: 1;
          background: white;
          border-top-left-radius: 20px;
          border-top-right-radius: 20px;
          margin-top: -10px;
          position: relative;
          z-index: 2;
          padding: 15px 15px 60px;
          display: flex;
          flex-direction: column;
          box-shadow: 0 -10px 20px rgba(0, 0, 0, 0.1);
          min-height: 300px;
          height: calc(43% + 20px);
        }

        .marquee-wrap {
          margin-top: 0px;
          margin-bottom: -10px;
          padding: 5px 0;
          color: #026c48;
          font-weight: bold;
          font-size: 1.15rem;
          position: relative;
          top: 0;
          text-align: center;
        }

        .menu-list {
          width: 100%;
          margin: 15px auto;
          display: flex;
          flex-direction: column;
          gap: 9px;
          margin-top: 15px;
          flex-grow: 1;
          padding-bottom: 20px;
        }

        .btn {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 20px;
          border: none;
          border-radius: 12px;
          font-size: 0.85rem;
          font-weight: 530;
          color: white;
          text-decoration: none;
          cursor: pointer;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          transition: 0.2s;
          height: 54px;
          position: relative;
        }

        .btn span {
          position: absolute;
          left: 45%;
          top: 50%;
          transform: translate(-50%, -50%);
          text-align: center;
          width: 100%;
          pointer-events: none;
        }

        .btn img {
          width: 50px;
          height: 50px;
          margin-left: 284px;
          flex-shrink: 0;
        }

        .btn-green {
          background-color: #94b91c;
        }

        .btn-grey {
          background-color: #6e6e6e;
        }

        .footer {
          position: absolute;
          bottom: 2px;
          left: 50%;
          transform: translateX(-50%);
          width: 100%;
          text-align: center;
          font-size: 1.15rem;
          font-weight: bold;
          color: #059363;
          z-index: 40;
        }
      `}</style>
    </>
  );
}

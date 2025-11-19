// استيراد الأدوات اللازمة من حزمة Firebase
import { initializeApp } from "firebase/app";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut
} from "firebase/auth/compat"; // **هذا هو السطر الحاسم**

// 1. مفتاح الربط (Firebase Configuration)
// هذا هو الكود الخاص بمشروعك "Click"
const firebaseConfig = {
  apiKey: "AIzaSyBVnhB2nE5Nm2Mfzu_lqYtwJw89cG3casg",
  authDomain: "clickappproject.firebaseapp.com",
  projectId: "clickappproject",
  storageBucket: "clickappproject.firebasestorage.app",
  messagingSenderId: "658757885330",
  appId: "1:658757885330:web:99273c489aa25dceb3354b",
  measurementId: "G-HP3LY7ZXL9"
};


// 2. تهيئة التطبيق (Initialization)
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // **تهيئة المصادقة**


// 3. الدوال الأساسية (Core Functions)
// [... باقي الكود الذي يستخدم auth]
// دالة إنشاء حساب
document.getElementById('registerBtn').addEventListener(>
    const email = document.getElementById('emailInput').>
    const password = document.getElementById('passwordIn>

    // شروط بسيطة لكلمة المرور (يجب أن تكون 6 أحرف على ا>
    if (password.length < 6) {
        document.getElementById('message').innerText = ">
        return;
    }

    try {
        const userCredential = await createUserWithEmail>
        document.getElementById('message').innerText = ">
        updateUI(true);
      } catch (error) {
        document.getElementById('message').innerText = ">
        updateUI(false);
    }
});
//... (الدوال الأخرى)

// دالة تسجيل الدخول
document.getElementById('loginBtn').addEventListener('cl>
    const email = document.getElementById('emailInput').>
    const password = document.getElementById('passwordIn>

    try {
        await signInWithEmailAndPassword(auth, email, pa>
        document.getElementById('message').innerText = ">
        updateUI(true);
    } catch (error) {
        document.getElementById('message').innerText = ">
        updateUI(false);
 }
});

// دالة تسجيل الخروج
document.getElementById('logoutBtn').addEventListener('c>
    try {
        await signOut(auth);
        document.getElementById('message').innerText = ">
        updateUI(false);
    } catch (error) {
        document.getElementById('message').innerText = ">
    }
});

// دالة تحديث الواجهة (إخفاء/إظهار الأزرار)
function updateUI(isLoggedIn) {
    if (isLoggedIn) {
        document.getElementById('loginBtn').style.displa>
        document.getElementById('registerBtn').style.dis>
        document.getElementById('logoutBtn').style.displ>
          document.getElementById('welcomeDiv').style.disp>
          } else {
        document.getElementById('loginBtn').style.displa>
        document.getElementById('registerBtn').style.dis>
        document.getElementById('logoutBtn').style.displ>
        document.getElementById('welcomeDiv').style.disp>
    }
}

          

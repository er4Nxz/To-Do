# To-Do App

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![MIT License](https://img.shields.io/badge/license-MIT-blue.svg?style=for-the-badge)

---

## 🇬🇧 English

### 🎯 Overview
*To-Do App is a clean and simple task management application developed by Erfan Ahmadi using React + TypeScript + Vite.  
This project was created during the learning phase of TypeScript and component-based development in React.  
It allows users to add, edit, delete, and mark tasks efficiently in a minimalist, user-friendly interface.

### 🧩 Features
- Add, edit, delete, and mark tasks as done  
- Task persistence using local state  
- Interactive UI with SweetAlert2 notifications  
- Clean and responsive layout  
- Type-safe with TypeScript
- Built and served using Vite

### ⚙️ Installation & Setup
# Clone the repository
git clone https://github.com/er4Nxz/To-Do.git
cd To-Do/code

# Install dependencies
npm install

# Run the development server
npm run dev

### 🚀 Example Snippet
// Example of adding a task in the To-Do App
const handleAddTask = () => {
  if (task.trim()) {
    setTasks([...tasks, { id: Date.now(), title: task, done: false }]);
    setTask("");
  }
};

### 🛠️ Technologies Used
- React (Hooks, Components)
- TypeScript
- Vite
- SweetAlert2 (alerts)
- React Icons
- JavaScript ES6+

### 💡 Lessons Learned
This project helped me:
- Strengthen understanding of React with TypeScript  
- Manage local component states effectively  
- Work with events, validation, and functional updates  

### 🧾 License
This project is licensed under the MIT License.  
Free for personal and educational use.

---

## 🇮🇷 فارسی

### 🎯 معرفی پروژه
To-Do App یک اپلیکیشن ساده و تمیز برای مدیریت کارهاست که توسط عرفان احمدی با استفاده از React + TypeScript + Vite ساخته شده است.  
هدف از این پروژه، تمرین تایپ‌اسکریپت و یادگیری توسعه کامپوننت‌محور در React بوده است.  
کاربر می‌تواند در این برنامه کارهای خود را افزودن، ویرایش، حذف و تکمیل‌شده علامت‌گذاری کند.

### 🧩 ویژگی‌ها
- افزودن، ویرایش، حذف و علامت‌گذاری تسک‌ها  
- رابط کاربری واکنش‌گرا و ساده  
- اعلان‌های کاربر با SweetAlert2
- ساختار تمیز و خوانا  
- تایپ امن با TypeScript
- توسعه سریع با Vite

### ⚙️ نصب و اجرا
# کلون کردن مخزن
git clone https://github.com/er4Nxz/To-Do.git
cd To-Do/code

# نصب پکیج‌ها
npm install

# اجرای پروژه
npm run dev

### 🚀 نمونه کد
// افزودن تسک جدید
const handleAddTask = () => {
  if (task.trim()) {
    setTasks([...tasks, { id: Date.now(), title: task, done: false }]);
    setTask("");
  }
};

### 🛠️ تکنولوژی‌های استفاده‌شده
- React (با استفاده از Hooks و Components)
- TypeScript
- Vite
- SweetAlert2 (اعلان‌ها)
- React Icons
- JavaScript ES6+

### 💡 نکات و تجربیات
از طریق این پروژه یاد گرفتم که:
- state و eventها را در TypeScript مدیریت کنم  
- ساختار ساده و ماژولار برای تسک‌ها ایجاد کنم  
- رابط کاربری کارآمد و قابل فهم طراحی کنم  

### 🧾 لایسنس
این پروژه تحت مجوز MIT License منتشر شده و برای استفاده شخصی یا آموزشی آزاد است.

---

Developed with ❤️ by Erfan Ahmadi*

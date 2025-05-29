
# ToastNotificationJs

A reusable toast notification component for **ASP.NET Core** and **Classic ASP.NET MVC** projects, designed to show beautiful, customizable notifications with simple JavaScript and CSS.

---

## Features

- Display toast notifications at any screen position (bottom-center by default).
- Multiple types of notifications: success, error, info, warning, or custom colors.
- Smooth slide-in/out animations from different directions.
- Progress bar with timeout countdown.
- Close button to manually dismiss notifications.
- Compatible with both ASP.NET Core and classic MVC projects.
- Easy to integrate with minimal setup.

---

## Installation

You can install via **NuGet** package manager:

```
Install-Package ToastNotificationJs
```

Or download the source from [GitHub repository](https://github.com/kavehnorozi/ToastNotificationJs).

---

## Usage

### For ASP.NET Core

1. Include CSS and JS files from `wwwroot/toastnotification/` in your layout:

```html
<link rel="stylesheet" href="~/toastnotification/ToastNotification.css" />
<script src="~/toastnotification/ToastNotification.js"></script>
```

2. Add a container div anywhere in your layout or page:

```html
<div id="toastContainer" class="toast-container"></div>
```

3. Call the `showToast` JavaScript function to display notifications:

```js
showToast('Hello from ASP.NET Core!', 'success', 'Success', 4000);
```

### For Classic ASP.NET MVC

1. Reference CSS and JS files from the `content/toastnotification/` folder in your `_Layout.cshtml`:

```html
<link href="@Url.Content("~/content/toastnotification/ToastNotification.css")" rel="stylesheet" />
<script src="@Url.Content("~/content/toastnotification/ToastNotification.js")"></script>
```

2. Add the container div:

```html
<div id="toastContainer" class="toast-container"></div>
```

3. Use `showToast` as above.

---

## API

```js
showToast(message, color = 'info', title = null, duration = 5000, position = 'bottom-center')
```

- `message` (string): Text to show.
- `color` (string): One of `'success'`, `'error'`, `'info'`, `'warning'`, or any valid CSS color.
- `title` (string | null): Optional title text.
- `duration` (number): Duration in milliseconds before toast auto hides.
- `position` (string): Position on screen. Options:
  - `'bottom-center'` (default)
  - `'bottom-left'`
  - `'bottom-right'`
  - `'top-center'`
  - `'top-left'`
  - `'top-right'`

---

## Demo

![Demo Screenshot](https://raw.githubusercontent.com/kavehnorozi/ToastNotificationJs/main/demo/demo-screenshot.png)

Check the [live demo](https://kavehnorozi.github.io/ToastNotificationJs/) for examples.

---

## License

MIT License © 2025 Kaveh Norozi

---

## راهنمای استفاده (فارسی)

ToastNotificationJs یک کامپوننت اعلان توست قابل استفاده مجدد برای پروژه‌های **ASP.NET Core** و **MVC کلاسیک** است.

### امکانات

- نمایش اعلان‌ها در هر جای صفحه با حالت پیش‌فرض پایین وسط.
- انواع اعلان‌ها: موفقیت، خطا، اطلاع، هشدار یا رنگ دلخواه.
- انیمیشن روان ورود و خروج اعلان‌ها.
- نوار پیشرفت زمان‌بندی.
- دکمه بستن دستی اعلان.
- سازگار با ASP.NET Core و MVC کلاسیک.
- راه‌اندازی سریع و آسان.

### نصب

با استفاده از NuGet:

```
Install-Package ToastNotificationJs
```

یا از گیت‌هاب دانلود کنید:

[https://github.com/kavehnorozi/ToastNotificationJs](https://github.com/kavehnorozi/ToastNotificationJs)

### استفاده

#### در ASP.NET Core

1. لینک کردن CSS و JS:

```html
<link rel="stylesheet" href="~/toastnotification/ToastNotification.css" />
<script src="~/toastnotification/ToastNotification.js"></script>
```

2. اضافه کردن کانتینر:

```html
<div id="toastContainer" class="toast-container"></div>
```

3. استفاده از تابع جاوااسکریپت:

```js
showToast('سلام از ASP.NET Core!', 'success', 'موفقیت', 4000);
```

#### در MVC کلاسیک

1. اضافه کردن فایل‌ها در `_Layout.cshtml`:

```html
<link href="@Url.Content("~/content/toastnotification/ToastNotification.css")" rel="stylesheet" />
<script src="@Url.Content("~/content/toastnotification/ToastNotification.js")"></script>
```

2. اضافه کردن کانتینر:

```html
<div id="toastContainer" class="toast-container"></div>
```

3. استفاده مانند قبل.

---

## API فارسی

```js
showToast(پیام, رنگ = 'info', عنوان = null, مدت = 5000, موقعیت = 'bottom-center')
```

- `پیام`: متن اعلان
- `رنگ`: success، error، info، warning یا رنگ CSS دلخواه
- `عنوان`: متن عنوان اختیاری
- `مدت`: زمان به میلی‌ثانیه برای نمایش اعلان
- `موقعیت`: محل نمایش اعلان، گزینه‌ها:
  - پایین وسط (پیش‌فرض)
  - پایین چپ
  - پایین راست
  - بالا وسط
  - بالا چپ
  - بالا راست

---

## تماس

برای سوالات، پیشنهادات و مشکلات به [GitHub Issues](https://github.com/kavehnorozi/ToastNotificationJs/issues) مراجعه کنید.

---

**امیدوارم این پروژه برای شما مفید باشد!**


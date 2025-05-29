// ایجاد کانتینر برای توست‌ها
const toastContainer = document.getElementById('toastContainer');

/**
 * نمایش اعلان توست
 * @param {string} message - پیام برای نمایش
 * @param {string} color - رنگ زمینه ('success', 'error', 'info', 'warning', یا هر رنگ CSS)
 * @param {string|null} title - عنوان اختیاری برای توست
 * @param {number} duration - مدت زمان به میلی‌ثانیه قبل از ناپدید شدن توست
 */
function showToast(message, color = 'info', title = null, duration = 5000, position = 'bottom-center') {
    const toast = document.createElement('div');
    toast.className = 'toast';

    let backgroundColor, textColor;
    switch (color) {
        case 'success': backgroundColor = 'var(--toast-success)'; textColor = 'var(--toast-text-light)'; break;
        case 'error': backgroundColor = 'var(--toast-error)'; textColor = 'var(--toast-text-light)'; break;
        case 'info': backgroundColor = 'var(--toast-info)'; textColor = 'var(--toast-text-light)'; break;
        case 'warning': backgroundColor = 'var(--toast-warning)'; textColor = 'var(--toast-text-dark)'; break;
        default:
            backgroundColor = color;
            textColor = isColorDark(color) ? 'var(--toast-text-light)' : 'var(--toast-text-dark)';
    }

    toast.style.backgroundColor = backgroundColor;
    toast.style.color = textColor;

    if (title) {
        const titleElement = document.createElement('div');
        titleElement.className = 'toast-title';
        titleElement.textContent = title;
        toast.appendChild(titleElement);
    }

    const messageElement = document.createElement('div');
    messageElement.className = 'toast-message';
    messageElement.textContent = message;
    toast.appendChild(messageElement);

    const closeButton = document.createElement('button');
    closeButton.className = 'toast-close';
    closeButton.innerHTML = '×';
    closeButton.addEventListener('click', () => removeToast(toast));
    toast.appendChild(closeButton);

    const progressContainer = document.createElement('div');
    progressContainer.className = 'toast-progress';
    const progressBar = document.createElement('div');
    progressBar.className = 'toast-progress-bar';
    progressContainer.appendChild(progressBar);
    toast.appendChild(progressContainer);

    // تغییر کلاس کانتینر بر اساس موقعیت
    toastContainer.className = 'toast-container';
    toastContainer.classList.add(`toast-container-${position}`);

    toastContainer.appendChild(toast);
    void toast.offsetWidth;
    toast.classList.add('show');

    progressBar.style.transition = `transform ${duration / 1000}s linear`;
    progressBar.style.transform = 'scaleX(0)';

    const timeoutId = setTimeout(() => removeToast(toast), duration);
    toast.dataset.timeoutId = timeoutId;
}

/**
 * حذف توست با انیمیشن
 * @param {HTMLElement} toast - عنصر توست برای حذف
 */
function removeToast(toast) {
    // پاک کردن تایمر در صورت وجود
    if (toast.dataset.timeoutId) {
        clearTimeout(parseInt(toast.dataset.timeoutId));
    }

    // اضافه کردن کلاس مخفی کردن برای انیمیشن
    toast.classList.add('hide');
    toast.classList.remove('show');

    // حذف از DOM پس از تکمیل انیمیشن
    setTimeout(() => {
        if (toast.parentElement) {
            toast.parentElement.removeChild(toast);
        }
    }, 300); // مطابق با مدت زمان انتقال CSS
}

/**
 * تشخیص اینکه آیا رنگ تیره است (برای انتخاب رنگ متن مناسب)
 * @param {string} color - مقدار رنگ CSS
 * @return {boolean} - درست اگر رنگ تیره باشد
 */
function isColorDark(color) {
    // ایجاد عنصر موقت برای محاسبه رنگ
    const tempElement = document.createElement('div');
    tempElement.style.backgroundColor = color;
    tempElement.style.display = 'none';
    document.body.appendChild(tempElement);

    // دریافت رنگ محاسبه شده
    const computedColor = window.getComputedStyle(tempElement).backgroundColor;
    document.body.removeChild(tempElement);

    // تجزیه مقادیر RGB
    const rgbMatch = computedColor.match(/rgba?$$(\d+),\s*(\d+),\s*(\d+)(?:,\s*[\d.]+)?$$/);
    if (!rgbMatch) return true; // پیش‌فرض تیره اگر تجزیه ناموفق باشد

    const r = parseInt(rgbMatch[1]);
    const g = parseInt(rgbMatch[2]);
    const b = parseInt(rgbMatch[3]);

    // محاسبه روشنایی درک شده با استفاده از فرمول:
    // (0.299*R + 0.587*G + 0.114*B)
    const brightness = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

    // برگرداندن درست اگر رنگ تیره باشد (روشنایی < 0.5)
    return brightness < 0.5;
}
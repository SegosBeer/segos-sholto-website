export const AgeGate = {
  confirmAge() {
    sessionStorage.setItem('segos_age_confirmed', 'true');
    document.getElementById('age-gate').style.display = 'none';
    document.getElementById('main-content').style.display = 'block';
    document.getElementById('body-lock').style.overflow = 'auto';
  },
  rejectAge() {
    window.location.href = 'https://www.google.com';
  },
  init() {
    if (sessionStorage.getItem('segos_age_confirmed') === 'true') {
      this.confirmAge();
    }
  }
};
AgeGate.init();

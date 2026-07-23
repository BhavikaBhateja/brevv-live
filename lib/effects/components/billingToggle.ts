export function initPricing() {
  const pricingToggle = document.getElementById('pricing-toggle') as HTMLInputElement | null;
  const priceEssentials = document.getElementById('price-essentials');
  const priceCampus = document.getElementById('price-campus');
  const periodEssentials = document.getElementById('period-essentials');
  const periodCampus = document.getElementById('period-campus');
  const toggleMonthlyLabel = document.getElementById('billing-monthly');
  const toggleAnnuallyLabel = document.getElementById('billing-annually');

  if (pricingToggle) {
    pricingToggle.addEventListener('change', () => {
      if (pricingToggle.checked) {
        // Annual rates
        if (priceEssentials) priceEssentials.textContent = "₹85";
        if (priceCampus) priceCampus.textContent = "₹145";
        if (periodEssentials) periodEssentials.textContent = "Per user, per month (billed annually)";
        if (periodCampus) periodCampus.textContent = "Per user, per month (billed annually)";
        if (toggleMonthlyLabel) toggleMonthlyLabel.classList.remove('active');
        if (toggleAnnuallyLabel) toggleAnnuallyLabel.classList.add('active');
      } else {
        // Monthly rates
        if (priceEssentials) priceEssentials.textContent = "₹175";
        if (priceCampus) priceCampus.textContent = "₹299";
        if (periodEssentials) periodEssentials.textContent = "Per user, per month";
        if (periodCampus) periodCampus.textContent = "Per user, per month";
        if (toggleMonthlyLabel) toggleMonthlyLabel.classList.add('active');
        if (toggleAnnuallyLabel) toggleAnnuallyLabel.classList.remove('active');
      }
    });

    if (toggleMonthlyLabel) {
      toggleMonthlyLabel.addEventListener('click', () => {
        pricingToggle.checked = false;
        pricingToggle.dispatchEvent(new Event('change'));
      });
    }

    if (toggleAnnuallyLabel) {
      toggleAnnuallyLabel.addEventListener('click', () => {
        pricingToggle.checked = true;
        pricingToggle.dispatchEvent(new Event('change'));
      });
    }
  }
}

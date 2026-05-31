<template>
  <div class="page-container">
    <h1 class="page-title">Monthly Donations</h1>

    <div class="intro-block">
      <p class="lead-text">Join the Lookingglass journey by making a bigger impact through recurring gifts!</p>
      <p class="body-text">
        The "Automatically Renew" check box sets up an indefinite recurring gift in the amount selected, and unclicking
        that check box will process a one-time gift. You may adjust your recurring gift at any time, or set up a
        recurring donation for another amount by getting in touch at 773-477-9257 or
        development@lookingglasstheatre.org.
      </p>
    </div>

    <div class="donations-grid">
      <div v-for="tier in tiers" :key="tier.amount" class="donation-card">
        <div class="card-top">
          <h3 class="donation-title">Monthly ${{ tier.amount }} Donation</h3>
          <p class="donation-desc">{{ tier.desc }}</p>
        </div>

        <div class="card-bottom">
          <div class="donation-meta">
            <p><strong>Membership Period:</strong> 1 month</p>
            <p><strong>Price:</strong> ${{ tier.amount }}.00</p>
          </div>

          <label class="auto-renew">
            <input type="checkbox" v-model="tier.autoRenew" />
            Automatically Renew?
          </label>

          <button class="add-btn">ADD TO CART</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
const tiers = reactive([
  { amount: 100, desc: 'Support Lookingglass with a recurring gift!', autoRenew: true },
  { amount: 15, desc: 'Support Lookingglass with a recurring gift!', autoRenew: true },
  { amount: 25, desc: 'Support Lookingglass with a recurring gift!', autoRenew: true },
  { amount: 37, desc: 'In honor of our 37th Season, support Lookingglass with a recurring gift!', autoRenew: true },
  { amount: 50, desc: 'Support Lookingglass with a recurring gift!', autoRenew: true },
  { amount: 75, desc: 'Support Lookingglass with a recurring gift!', autoRenew: true },
])
</script>

<style scoped>
.page-container {
  max-width: 100%;
  margin: 0 auto;
  padding: 44px 48px 80px;
}

.page-title {
  font-family: var(--font-display);
  font-weight: 1000;
  font-size: 2rem;
  margin-bottom: 24px;
  color: #111;
}

.intro-block {
  max-width: 100%;
  margin-bottom: 36px;
}

.lead-text {
  font-size: 1rem;
font-family: var(--font-display);
  font-weight: 1000;  color: #111;
  margin-bottom: 14px;
  line-height: 1.5;
}

.body-text {
  font-size: 0.88rem;
  color: #333;
  line-height: 1.65;
}

.donations-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.donation-card {
  border: 1px solid #ddd;
  background: #fff;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.06);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0;
  border-radius: 2px;
  transition: box-shadow 0.2s;
  min-height: 320px;
}

.donation-card:hover {
  box-shadow: 0 4px 18px rgba(0, 0, 0, 0.11);
}

.card-top {
  padding: 24px 24px 20px;
  flex: 1;
}

.donation-title {
  font-family: var(--font-display);
  font-weight: 1000;
  font-size: 2.11rem;
  color: #111;
  margin-bottom: 18px;
  line-height: 1.2;
}

.donation-desc {
  font-size: 0.88rem;
  color: #444;
  line-height: 1.55;
}

.card-bottom {
  padding: 16px 24px 22px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  border-top: 1px solid #e8e8e8;
}

.donation-meta {
  font-size: 0.88rem;
  color: #111;
  line-height: 1.75;
}

.donation-meta strong {
  font-weight: 700;
}

.auto-renew {
  display: flex;
  align-items: center;
  gap: 9px;
  font-size: 0.88rem;
  color: #222;
  cursor: pointer;
}

.auto-renew input[type="checkbox"] {
  width: 17px;
  height: 17px;
  accent-color: #f5a623;
  cursor: pointer;
  flex-shrink: 0;
}

.add-btn {
  align-self: flex-start;
  background: #f5a623;
  color: #ffffff;
  border: none;
  padding: 11px 22px;
  font-family: var(--font-body);
  font-weight: 700;
  font-size: 12.5px;
  letter-spacing: 1.1px;
  text-transform: uppercase;
  cursor: pointer;
  border-radius: 0;
  transition: background 0.2s;
}

.add-btn:hover {
  background: #d4891a;
}

@media (max-width: 1024px) {
  .page-container {
    padding: 36px 32px 70px;
  }

  .donations-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
  }

  .donation-title {
    font-size: 1.7rem;
  }
}

@media (max-width: 900px) {
  .page-container {
    padding: 30px 24px 60px;
  }

  .donations-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }

  .donation-title {
    font-size: 1.6rem;
  }
}

@media (max-width: 600px) {
  .page-container {
    padding: 22px 16px 50px;
  }

  .page-title {
    font-size: 1.5rem;
    margin-bottom: 18px;
  }

  .lead-text {
    font-size: 0.95rem;
  }

  .body-text {
    font-size: 0.84rem;
  }

  .donations-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }

  .donation-title {
    font-size: 1.4rem;
    margin-bottom: 12px;
  }

  .card-top {
    padding: 18px 16px 14px;
  }

  .card-bottom {
    padding: 12px 16px 18px;
    gap: 10px;
  }

  .add-btn {
    width: 100%;
    text-align: center;
  }
}

@media (max-width: 400px) {
  .donations-grid {
    grid-template-columns: 1fr;
  }

  .page-container {
    padding: 16px 12px 40px;
  }

  .donation-title {
    font-size: 1.5rem;
  }
}
</style>
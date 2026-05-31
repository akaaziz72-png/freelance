<template>
  <div class="page-container">
    <h1 class="page-title">Step into the story...</h1>

    <div class="donate-intro">
      <h2 class="section-heading">Make a Donation</h2>
      <p class="intro-text">At Lookingglass, every moment of wonder on our stage or in the classroom begins with you. Your generosity shapes edge-of-your-seat experiences, opens doors for students and teachers, and strengthens communities. When you give, you play a role in powering a transformative home for artists and audiences.</p>
      <p class="intro-text">Lookingglass Theatre honors generous and loyal donors at all levels through giving opportunities that offer special recognition, distinct connection to the mission, exclusive invitations, and other expressions of our gratitude.</p>
      <p class="choose-text">Choose your impact.</p>
      <p class="reminder-text">Reminder, if you are able to, you can choose more than one.</p>
    </div>

    <div class="causes-grid">
      <div v-for="cause in causes" :key="cause.id" class="cause-card">

        <h3 class="cause-title">{{ cause.title }}</h3>
        <p class="cause-desc">{{ cause.desc }}</p>

        <div class="amount-row">
          <label class="amount-label">Amount:</label>
          <span class="dollar-sign">$</span>
          <input type="number" class="amount-input" v-model="cause.amount" />
        </div>

        <div class="recog-row">
          <label class="recog-label">Recognition Name (this is how you will appear in donor lists):</label>
          <input type="text" class="recog-input" />
        </div>

        <label class="check-label">
          <input type="checkbox" v-model="cause.anonymous" />
          <span>I would like this donation to be anonymous.</span>
        </label>
        <label class="check-label">
          <input type="checkbox" v-model="cause.inHonor" />
          <span>I would like to make this donation in recognition of someone else.</span>
        </label>

        <div class="honor-row">
          <select class="honor-select">
            <option>in_honor_of</option>
            <option>in_memory_of</option>
          </select>
          <input type="text" class="honor-input" />
        </div>

      </div>
    </div>

    <button class="update-btn">ADD TO CART</button>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
const causes = reactive([
  {
    id: 1,
    title: 'Wonderland Society',
    desc: 'Championing Artistic Creation and the Mission Day-to-Day. The Wonderland Society is a community of donors whose annual support advances artistic projects and sustains the essential day-to-day work of Lookingglass Theatre. Their generosity strengthens our operations, fuels our artists and staff, and ensures we can continue creating transformative experiences for Chicago.',
    amount: 50,
    anonymous: false,
    inHonor: false,
  },
  {
    id: 2,
    title: "Come As You Aren't Ball",
    desc: "The Come As You Aren't Ball is Lookingglass Theatre's signature celebration of imagination, inviting guests to step into a world of bold characters, transformative design, and theatrical play. This one of a kind gala raises essential support for the artists, educators, and programs that bring our mission to life, turning an unforgettable night of creativity into lasting impact for Chicago.",
    amount: 100,
    anonymous: false,
    inHonor: false,
  },
  {
    id: 3,
    title: 'Lookingglass Education',
    desc: 'Empowering Communities. Gifts to Lookingglass Education open doors for young people across Chicago. Your support brings dynamic school residencies into classrooms, nurtures emerging artists through the Young Ensemble, and strengthens community engagement programs that use theatre to spark curiosity, confidence, and connection.',
    amount: 50,
    anonymous: false,
    inHonor: false,
  },
])
</script>

<style scoped>
.page-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 40px 48px 80px;
}

.page-title {
  font-size: 2.55rem;
  font-weight: 1000;
  color: #111;
  margin-bottom: 32px;
  font-style: normal;
  font-family: var(--font-body);
}

.donate-intro {
  max-width: 100%;
  margin-bottom: 36px;
}

.section-heading {
  font-size: 1.3rem;
  font-weight: 1000;
  color: #111;
  margin-bottom: 16px;
  font-family: var(--font-body);
}

.intro-text {
  font-size: 0.9rem;
  color: #222;
  line-height: 1.7;
  margin-bottom: 16px;
}

.choose-text {
  font-size: 0.9rem;
  font-weight: 600;
  color: #222;
  margin-bottom: 8px;
}

.reminder-text {
  font-size: 0.88rem;
  color: #555;
  font-style: italic;
  margin-bottom: 0;
}

.causes-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-bottom: 32px;
}

.cause-card {
  border: 1px solid #ddd;
  border-radius: 4px;
  background: #fff;
  padding: 22px 20px 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.cause-title {
  font-size: 1.35rem;
  font-weight: 1000;
  color: #111;
  font-family: var(--font-body);
  margin: 0;
}

.cause-desc {
  font-size: 0.82rem;
  color: #333;
  line-height: 1.6;
  margin: 0;
}

.amount-row {
  display: flex;
  align-items: center;
  gap: 6px;
  padding-top: 10px;
  border-top: 1px solid #e8e8e8;
}

.amount-label {
  font-size: 0.85rem;
  color: #222;
  min-width: 70px;
}

.dollar-sign {
  font-size: 0.85rem;
  color: #222;
  font-weight: 500;
}

.amount-input {
  border: 1px solid #bbb;
  padding: 5px 10px;
  font-size: 0.85rem;
  font-family: var(--font-body);
  width: 100%;
  color: #111;
  background: #fff;
  border-radius: 0;
  height: 30px;
}
.amount-input:focus { outline: none; border-color: #999; }

.recog-row {
  display: flex;
  align-items: flex-start;
  gap: 10px;
}

.recog-label {
  font-size: 0.82rem;
  color: #333;
  line-height: 1.45;
  min-width: 175px;
  max-width: 175px;
  flex-shrink: 0;
}

.recog-input {
  border: 1px solid #bbb;
  padding: 5px 8px;
  font-size: 0.82rem;
  font-family: var(--font-body);
  flex: 1;
  height: 30px;
  border-radius: 0;
  background: #fff;
}
.recog-input:focus { outline: none; border-color: #999; }

.check-label {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  cursor: pointer;
  font-size: 0.82rem;
  color: #333;
  line-height: 1.45;
}
.check-label input[type="checkbox"] {
  width: 15px;
  height: 15px;
  margin-top: 1px;
  flex-shrink: 0;
  accent-color: #555;
  cursor: pointer;
}

.honor-row {
  display: flex;
  gap: 8px;
  align-items: center;
}

.honor-select {
  border: 1px solid #bbb;
  padding: 5px 6px;
  font-size: 0.8rem;
  font-family: var(--font-body);
  background: #fff;
  height: 30px;
  border-radius: 0;
  min-width: 120px;
  color: #555;
}

.honor-input {
  border: 1px solid #bbb;
  padding: 5px 8px;
  font-size: 0.82rem;
  font-family: var(--font-body);
  flex: 1;
  height: 30px;
  border-radius: 0;
  background: #fff;
}
.honor-input:focus { outline: none; border-color: #999; }

.update-btn {
  background: #ff9800;;
  color: black;
  border: none;
  padding: 13px 26px;
  font-family: var(--font-body);
  font-weight: 700;
  font-size: 13px;
  letter-spacing: 1.1px;
  text-transform: uppercase;
  cursor: pointer;
  border-radius: 2px;
  transition: background 0.2s;
}
.update-btn:hover { background: #d4891a; }

@media (max-width: 1024px) {
  .page-container {
    padding: 36px 32px 70px;
  }

  .causes-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
  }

  .cause-title {
    font-size: 1.15rem;
  }
}

@media (max-width: 960px) {
  .page-container {
    padding: 30px 24px 60px;
  }

  .causes-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }

  .page-title {
    font-size: 2rem;
  }
}

@media (max-width: 640px) {
  .page-container {
    padding: 22px 16px 50px;
  }

  .page-title {
    font-size: 1.6rem;
    margin-bottom: 22px;
  }

  .section-heading {
    font-size: 1.1rem;
  }

  .intro-text {
    font-size: 0.86rem;
  }

  .causes-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
    margin-bottom: 24px;
  }

  .cause-card {
    padding: 16px 14px 16px;
    gap: 10px;
  }

  .cause-title {
    font-size: 1rem;
  }

  .cause-desc {
    font-size: 0.78rem;
  }

  .recog-row {
    flex-direction: column;
    gap: 6px;
  }

  .recog-label {
    min-width: 100%;
    max-width: 100%;
  }

  .recog-input {
    width: 100%;
  }

  .honor-row {
    flex-direction: column;
    align-items: stretch;
  }

  .honor-select {
    width: 100%;
  }

  .update-btn {
    width: 100%;
    text-align: center;
    padding: 14px;
  }
}

@media (max-width: 400px) {
  .causes-grid {
    grid-template-columns: 1fr;
  }

  .page-container {
    padding: 16px 12px 40px;
  }

  .page-title {
    font-size: 1.4rem;
  }
}
</style>
<template>
  <div class="schedule-page">
    <h1 class="page-title">LookingClass: Stage Combat 101</h1>
    <div class="schedule-list">
      <div v-for="(show, i) in shows" :key="i" class="schedule-row">
        <div class="schedule-info">
          <div class="schedule-day">{{ show.day }}</div>
          <div class="schedule-date">{{ show.date }} | {{ show.time }}</div>
        </div>
        <div class="schedule-icons">
          <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path
              d="M18 11V6a2 2 0 0 0-4 0v5M14 10V4a2 2 0 0 0-4 0v6M10 10.5V6a2 2 0 0 0-4 0v8M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34L2 16" />
          </svg>
        </div>
        <button class="btn-book" @click="bookShow(show)">BOOK NOW</button>
      </div>
    </div>
  </div>
</template>

<script setup>
const shows = [
  { day: 'Wednesday', date: 'June 17, 2026', time: '6:30 PM' },
  { day: 'Sunday', date: 'July 05, 2026', time: '1:00 PM' },
  { day: 'Saturday', date: 'July 11, 2026', time: '1:00 PM' },
]

function bookShow(show) {
  alert(`Booking: ${show.day}, ${show.date} at ${show.time}`)
}
</script>

<style scoped>
.schedule-page {
  max-width: 100%;
  margin: 0 auto;
  padding: 48px 40px 80px;
}

.page-title {
    font-family: 'DM Sans', sans-serif;
    font-weight: 900;
    font-size: 1.9rem;
    color: #0a0a0a;
    text-transform: uppercase;
    letter-spacing: 1px;
    text-shadow: 0.5px 0 currentColor;
}

.schedule-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.schedule-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    background: #fff;
    border: 1px solid #e8e8e8;
    border-radius: 6px;
    width: 1100px;
    height: 80px;
    padding: 0 20px;
    box-shadow: 0 1px 6px rgba(0, 0, 0, .05);
    transition: box-shadow .2s;
}

.schedule-row:hover {
    box-shadow: 0 3px 14px rgba(0, 0, 0, .09);
}

.schedule-info {
  flex: 1;
}

.schedule-day {
  font-weight: 700;
  font-size: .97rem;
  color: #0a0a0a;
}

.schedule-date {
  font-size: .88rem;
  color: #555;
  margin-top: 2px;
}


.schedule-icons {
    display: flex;
    align-items: center;
    flex: 1;
    justify-content: center;
    flex-shrink: 0;
}

.icon {
  width: 20px;
  height: 20px;
  stroke: #f5a623;
}

.btn-book {
  min-width: 170px;
  padding: 11px 20px;
  font-family: 'DM Sans', sans-serif;
  font-weight: 700;
  font-size: 12.5px;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  border: none;
  cursor: pointer;
  background: #f5a623;
  color: black;
  border-radius: 2px;
  transition: background .2s;
}

.btn-book:hover {
  background: #e68900;
}

@media (max-width: 900px) {
  .schedule-page {
    padding: 32px 20px 60px;
  }

  .page-title {
    font-size: 1.6rem;
    text-align: center;
  }

  .schedule-row {
    width: 100%;
    flex-wrap: wrap;
    height: auto;
    padding: 16px;
    gap: 12px;
  }

  .schedule-info {
    flex: 1 1 100%;
  }

  .schedule-icons {
    flex: 0 0 auto;
    justify-content: flex-start;
  }

  .btn-book {
    min-width: 140px;
    padding: 10px 16px;
    font-size: 11px;
  }
}

/* 768px and below */
@media (max-width: 768px) {
  .schedule-page {
    padding: 24px 16px 80px;
  }

  .page-title {
    font-size: 1.4rem;
    margin-bottom: 20px;
  }

  .schedule-row {
    padding: 14px;
    gap: 10px;
  }

  .schedule-day {
    font-size: 0.95rem;
  }

  .schedule-date {
    font-size: 0.85rem;
  }

  .icon {
    width: 18px;
    height: 18px;
  }

  .btn-book {
    min-width: 130px;
    padding: 9px 14px;
    font-size: 10.5px;
    letter-spacing: 1px;
  }
}

/* 480px and below */
@media (max-width: 480px) {
  .schedule-page {
    padding: 20px 12px 60px;
  }

  .page-title {
    font-size: 1.2rem;
    letter-spacing: 0.5px;
  }

  .schedule-row {
    padding: 12px;
    gap: 10px;
    border-radius: 8px;
  }

  .schedule-day {
    font-size: 0.9rem;
  }

  .schedule-date {
    font-size: 0.8rem;
  }

  .schedule-icons {
    width: 100%;
    justify-content: flex-start;
  }

  .icon {
    width: 16px;
    height: 16px;
  }

  .btn-book {
    width: 100%;
    min-width: unset;
    padding: 10px 12px;
    font-size: 11px;
    letter-spacing: 1px;
  }
}
</style>
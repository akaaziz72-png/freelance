<template>
  <div class="page-container">
    <h1 class="page-title">EVENTS</h1>
    <div class="events-grid">
      <div v-for="event in events" :key="event.id" class="event-card">
        <div class="event-image-wrap">
          <div class="event-image">
            <img :src="event.imgSrc" :alt="event.title" class="event-photo" />
            <div class="event-img-label" v-if="event.label">
            </div>
          </div>
          <router-link :to="event.id === 1 ? '/book1' : '/book2'" class="btn-orange book-btn">BOOK NOW</router-link>
        </div>
        <div class="event-info">
          <h3 class="event-name">{{ event.title }}</h3>
          <p class="event-dates">{{ event.dates }}</p>
          <p class="event-desc">{{ event.desc }} <a href="#" class="read-more">Read more</a></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import event1 from '../assets/img/event1.jpg'
import event2 from '../assets/img/event2.jpg'

const events = [
  {
    id: 1,
    title: 'UNTITLED VAMPIRE PLAY',
    dates: 'Thu June 04, 2026 - Sun July 12, 2026',
    desc: "Think you've got baggage? Try dating when you have centuries of dating history and a literal body co...",
    imgSrc: event1,
    label: 'UNTITLED\nVAMPIRE PLAY',
  },
  {
    id: 2,
    title: 'LookingClass: Stage Combat 101',
    dates: 'Wed June 17, 2026 - Sat July 11, 2026',
    desc: 'Have you ever wanted to (safely) punch someone in the face? Go behind the scenes of every production...',
    imgSrc: event2,
    label: null,
  },
]
</script>

<style scoped>
.page-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 40px 24px;
}

.page-title {
  font-family: var(--font-display);
  font-size: 2rem;
  font-weight: 1000;
  letter-spacing: 3px;
  margin-bottom: 40px;
  color: var(--black);
  margin-left: -44px;
}

.events-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 40px;
}

.event-card {
  border-radius: 2px;
  overflow: hidden;
  box-shadow: 0 2px 16px rgba(0,0,0,0.08);
  background: var(--white);
  transition: box-shadow 0.2s, transform 0.2s;
}

.event-card:hover {
  box-shadow: 0 6px 32px rgba(0,0,0,0.14);
  transform: translateY(-3px);
}

.event-image-wrap { 
  position: relative; 
}

.event-image {
  width: 100%;
  height: 260px;
  position: relative;
  overflow: hidden;
  background: #2a2a2a;
}

.event-img-label {
  position: absolute;
  bottom: 0;
  left: 0;
  font-family: var(--font-display);
  font-size: 1.6rem;
  font-weight: 900;
  color: white;
  text-align: left;
  padding: 28px;
  white-space: pre-line;
  line-height: 1.2;
  text-transform: uppercase;
  letter-spacing: 1px;
  z-index: 2;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
}

.event-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
}

.book-btn {
  position: absolute;
  bottom: 20px;
  right: 20px;
  padding: 12px 24px;
  font-size: 13px;
  font-weight: 700;
  z-index: 3;
  cursor: pointer;
}

.btn-orange {
  background: #ff9800;
  color: #0a0a0a;
  border: none;
  border-radius: 0;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.2s ease;
}

.btn-orange:hover {
  background: #e68900;
  transform: scale(1.02);
}

.event-info {
  padding: 20px 22px 24px;
}

.event-name {
  font-family: var(--font-body);
  font-weight: 700;
  font-size: 1.1rem;
  margin-bottom: 8px;
  color: var(--black);
}

.event-dates {
  font-size: 0.85rem;
  color: var(--gray-text);
  margin-bottom: 12px;
}

.event-desc {
  font-size: 0.9rem;
  color: #444;
  line-height: 1.55;
}

.read-more {
  color: #ff9800;
  font-weight: 600;
  font-size: 0.85rem;
  text-decoration: none;
}

.read-more:hover { 
  text-decoration: underline; 
}

@media (max-width: 1024px) {
  .events-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 28px;
  }
}

@media (max-width: 768px) {
  .page-container {
    padding: 20px 16px;
  }

  .page-title {
    font-size: 1.6rem;
    margin-bottom: 24px;
    margin-left: 0;
  }

  .events-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }

  .event-image {
    height: 200px;
  }

  .event-img-label {
    font-size: 1.1rem;
    padding: 16px;
  }

  .book-btn {
    padding: 9px 16px;
    font-size: 11px;
    bottom: 12px;
    right: 12px;
  }
}

@media (max-width: 520px) {
  .events-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .page-title {
    font-size: 1.4rem;
    margin-left: 0;
  }

  .event-image {
    height: 220px;
  }

  .event-img-label {
    font-size: 1.2rem;
    padding: 18px;
  }

  .book-btn {
    padding: 10px 18px;
    font-size: 12px;
    bottom: 14px;
    right: 14px;
  }

  .event-info {
    padding: 16px 16px 20px;
  }

  .event-name {
    font-size: 1rem;
  }
}

</style>
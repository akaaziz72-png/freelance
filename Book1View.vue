<template>
    <div class="schedule-page">
        <h1 class="page-title">UNTITLED VAMPIRE PLAY</h1>
        <div class="schedule-list">
            <div v-for="(show, i) in shows" :key="i" class="schedule-row">
                <div class="schedule-info">
                    <div class="schedule-day">{{ show.day }}</div>
                    <div class="schedule-date">{{ show.date }} | {{ show.time }}</div>
                    <div v-if="show.note" class="schedule-note">{{ show.note }}</div>
                </div>
                <div class="schedule-icons">
                    <span v-if="show.icons && show.icons.length" class="icons-wrap">
                        <svg v-if="show.icons.includes('eye')" class="icon" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="1.5">
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                            <circle cx="12" cy="12" r="3" />
                        </svg>
                        <svg v-if="show.icons.includes('hand')" class="icon" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="1.5">
                            <path
                                d="M18 11V6a2 2 0 0 0-4 0v5M14 10V4a2 2 0 0 0-4 0v6M10 10.5V6a2 2 0 0 0-4 0v8M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34L2 16" />
                        </svg>
                        <svg v-if="show.icons.includes('sun')" class="icon" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="1.5">
                            <circle cx="12" cy="12" r="5" />
                            <line x1="12" y1="1" x2="12" y2="3" />
                            <line x1="12" y1="21" x2="12" y2="23" />
                            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                            <line x1="1" y1="12" x2="3" y2="12" />
                            <line x1="21" y1="12" x2="23" y2="12" />
                            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                        </svg>
                        <svg v-if="show.icons.includes('cc')" class="icon" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="1.5">
                            <rect x="2" y="7" width="20" height="15" rx="2" />
                            <path d="M17 2l-5 5-5-5" />
                        </svg>
                        <svg v-if="show.icons.includes('tt')" class="icon" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="1.5">
                            <circle cx="12" cy="12" r="10" />
                            <path d="M8 12h8M12 8v8" />
                        </svg>
                    </span>
                </div>
                <button :class="show.limited ? 'btn-limited' : 'btn-book'" @click="bookShow(show)">
                    {{ show.limited ? 'LIMITED AVAILABILITY' : 'BOOK NOW' }}
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
const shows = [
    { day: 'Thursday', date: 'June 04, 2026', time: '7:30 PM', note: 'PWYC, Playwrights Night', icons: ['eye', 'hand'], limited: true },
    { day: 'Friday', date: 'June 05, 2026', time: '7:30 PM', icons: ['eye'], limited: false },
    { day: 'Saturday', date: 'June 06, 2026', time: '7:30 PM', icons: ['eye'], limited: false },
    { day: 'Sunday', date: 'June 07, 2026', time: '2:00 PM', icons: ['eye', 'sun'], limited: true },
    { day: 'Wednesday', date: 'June 10, 2026', time: '7:30 PM', icons: ['eye', 'hand'], limited: true },
    { day: 'Thursday', date: 'June 11, 2026', time: '7:30 PM', note: 'How Does Cirque Work?', icons: ['eye'], limited: false },
    { day: 'Friday', date: 'June 12, 2026', time: '7:30 PM', icons: ['eye'], limited: true },
    { day: 'Sunday', date: 'June 14, 2026', time: '2:00 PM', icons: ['sun'], limited: false },
    { day: 'Tuesday', date: 'June 16, 2026', time: '7:30 PM', note: 'Vampire Night', icons: [], limited: false },
    { day: 'Wednesday', date: 'June 17, 2026', time: '7:30 PM', note: 'Stage Combat Night', icons: [], limited: false },
    { day: 'Thursday', date: 'June 18, 2026', time: '2:00 PM', icons: ['sun'], limited: false },
    { day: 'Thursday', date: 'June 18, 2026', time: '7:30 PM', icons: [], limited: false },
    { day: 'Saturday', date: 'June 20, 2026', time: '2:00 PM', note: 'This Performance will be filmed.', icons: ['sun'], limited: false },
    { day: 'Saturday', date: 'June 20, 2026', time: '7:30 PM', icons: [], limited: false },
    { day: 'Sunday', date: 'June 21, 2026', time: '2:00 PM', icons: ['sun'], limited: false },
    { day: 'Wednesday', date: 'June 24, 2026', time: '7:30 PM', note: 'This Performance is mask required.', icons: [], limited: false },
    { day: 'Thursday', date: 'June 25, 2026', time: '2:00 PM', icons: ['sun'], limited: false },
    { day: 'Thursday', date: 'June 25, 2026', time: '7:30 PM', icons: [], limited: false },
    { day: 'Friday', date: 'June 26, 2026', time: '7:30 PM', icons: [], limited: false },
    { day: 'Saturday', date: 'June 27, 2026', time: '2:00 PM', note: 'Pride Day', icons: ['sun'], limited: false },
    { day: 'Saturday', date: 'June 27, 2026', time: '7:30 PM', icons: [], limited: false },
    { day: 'Sunday', date: 'June 28, 2026', time: '2:00 PM', icons: ['sun'], limited: false },
    { day: 'Tuesday', date: 'June 30, 2026', time: '7:30 PM', icons: [], limited: false },
    { day: 'Wednesday', date: 'July 01, 2026', time: '7:30 PM', icons: ['cc'], limited: false },
    { day: 'Thursday', date: 'July 02, 2026', time: '2:00 PM', icons: ['sun'], limited: false },
    { day: 'Thursday', date: 'July 02, 2026', time: '7:30 PM', note: 'Touch Tour at 6:30PM, Audio Description at 7:30PM', icons: ['cc', 'tt'], limited: false },
    { day: 'Friday', date: 'July 03, 2026', time: '7:30 PM', icons: [], limited: false },
    { day: 'Sunday', date: 'July 05, 2026', time: '2:00 PM', icons: ['sun'], limited: false },
    { day: 'Sunday', date: 'July 05, 2026', time: '7:30 PM', icons: [], limited: false },
    { day: 'Tuesday', date: 'July 07, 2026', time: '7:30 PM', icons: [], limited: false },
    { day: 'Wednesday', date: 'July 08, 2026', time: '7:30 PM', icons: [], limited: false },
    { day: 'Thursday', date: 'July 09, 2026', time: '7:30 PM', icons: [], limited: false },
    { day: 'Friday', date: 'July 10, 2026', time: '7:30 PM', icons: [], limited: false },
    { day: 'Saturday', date: 'July 11, 2026', time: '2:00 PM', icons: ['sun'], limited: false },
    { day: 'Saturday', date: 'July 11, 2026', time: '7:30 PM', icons: [], limited: false },
    { day: 'Sunday', date: 'July 12, 2026', time: '2:00 PM', icons: ['sun'], limited: false },
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
    font-weight: 900;
    font-size: 1rem;
    color: #000;
    letter-spacing: 0.3px;
}

.schedule-date {
    font-size: .88rem;
    color: #555;
    margin-top: 2px;
}

.schedule-note {
    font-size: .83rem;
    color: #555;
    margin-top: 3px;
}

.schedule-icons {
    display: flex;
    align-items: center;
    flex: 1;
    justify-content: center;
    flex-shrink: 0;
}

.icons-wrap {
    display: flex;
    gap: 8px;
    align-items: center;
}

.icon {
    width: 20px;
    height: 20px;
    stroke: #f5a623;
    flex-shrink: 0;
}

.btn-book,
.btn-limited {
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

.btn-book:hover,
.btn-limited:hover {
    background: #d4891a;
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

    .btn-book,
    .btn-limited {
        min-width: 140px;
        padding: 10px 16px;
        font-size: 11px;
    }
}

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

    .schedule-note {
        font-size: 0.8rem;
    }

    .icons-wrap {
        gap: 6px;
    }

    .icon {
        width: 18px;
        height: 18px;
    }

    .btn-book,
    .btn-limited {
        min-width: 130px;
        padding: 9px 14px;
        font-size: 10.5px;
        letter-spacing: 1px;
    }
}

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

    .schedule-note {
        font-size: 0.75rem;
    }

    .schedule-icons {
        width: 100%;
        justify-content: flex-start;
    }

    .icons-wrap {
        gap: 8px;
    }

    .icon {
        width: 16px;
        height: 16px;
    }

    .btn-book,
    .btn-limited {
        width: 100%;
        min-width: unset;
        padding: 10px 12px;
        font-size: 11px;
        letter-spacing: 1px;
    }
}
</style>
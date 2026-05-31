<template>
  <div class="page-container">
    <h1 class="page-title">Come As You Aren't Ball</h1>
    <div class="ball-content">
      <p class="lead">
        The Come As You Aren't Ball is Lookingglass Theatre's signature celebration of imagination, inviting guests to step into a world of bold characters, transformative design, and theatrical play.
      </p>
      <p>
        This one of a kind gala raises essential support for the artists, educators, and programs that bring our mission to life, turning an unforgettable night of creativity into lasting impact for Chicago.
      </p>
      <div class="ball-cta">
        <button class="btn-orange">GET TICKETS</button>
        <button class="btn-outline">LEARN MORE</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.ball-content {
  max-width: 700px;
  display: flex;
  flex-direction: column;
  gap: 18px;
}
.lead {
  font-size: 1.1rem;
  font-weight: 500;
  line-height: 1.7;
}
p { font-size: 0.95rem; color: var(--gray-text); line-height: 1.7; }
.ball-cta { display: flex; gap: 16px; margin-top: 10px; }
.btn-outline {
  border: 2px solid var(--orange);
  background: none;
  color: var(--orange-dark);
  padding: 12px 28px;
  font-family: var(--font-body);
  font-weight: 600;
  font-size: 13px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
}
.btn-outline:hover { background: var(--orange); color: white; }
</style>

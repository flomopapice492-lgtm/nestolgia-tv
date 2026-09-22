const channelData = [
  {
    name: 'CNN',
    type: 'News',
    number: 'Ch. 202',
    time: '8:30 PM ET',
    summary: 'Live news coverage, headline updates, and a classic cable newsroom feel.',
    accent: '#c73a3a',
    site: 'https://www.cnn.com',
    video: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4'
  },
  {
    name: 'ESPN',
    type: 'Sports',
    number: 'Ch. 21',
    time: '8:15 PM ET',
    summary: 'Big game nights, sports recaps, and a 2011 sports broadcast vibe.',
    accent: '#e4961d',
    site: 'https://www.espn.com',
    video: 'https://www.w3schools.com/html/mov_bbb.mp4'
  },
  {
    name: 'HGTV',
    type: 'Lifestyle',
    number: 'Ch. 110',
    time: '9:00 PM ET',
    summary: 'Home makeovers, décor reveals, and design stories from the living-room era.',
    accent: '#3e9f6d',
    site: 'https://www.hgtv.com',
    video: 'https://www.w3schools.com/html/movie.mp4'
  },
  {
    name: 'Food Network',
    type: 'Kitchen',
    number: 'Ch. 115',
    time: '7:45 PM ET',
    summary: 'Chef shows, family meals, and culinary nostalgia from the cooking boom era.',
    accent: '#d36a3d',
    site: 'https://www.foodnetwork.com',
    video: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm'
  },
  {
    name: 'MTV',
    type: 'Music',
    number: 'Ch. 36',
    time: '10:00 PM ET',
    summary: 'Late-night music videos, pop culture, and teen energy from a full decade ago.',
    accent: '#b838c5',
    site: 'https://www.mtv.com',
    video: 'https://www.w3schools.com/html/mov_bbb.mp4'
  },
  {
    name: 'Discovery',
    type: 'Science',
    number: 'Ch. 170',
    time: '9:30 PM ET',
    summary: 'Documentary adventures and curious science programming from the cable vault.',
    accent: '#3d74c7',
    site: 'https://www.discovery.com',
    video: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4'
  },
  {
    name: 'USA Network',
    type: 'Drama',
    number: 'Ch. 10',
    time: '8:45 PM ET',
    summary: 'Comfort-food dramas and scripted hits playing right after prime time.',
    accent: '#2d77d4',
    site: 'https://www.usanetwork.com',
    video: 'https://www.w3schools.com/html/movie.mp4'
  },
  {
    name: 'Nickelodeon',
    type: 'Family',
    number: 'Ch. 71',
    time: '7:30 PM ET',
    summary: 'Cartoon favorites and classic family entertainment from the early 2010s.',
    accent: '#2db1d9',
    site: 'https://www.nick.com',
    video: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm'
  }
];

const siteData = [
  {
    name: 'CNN.com',
    description: 'Headlines, politics, business, and a fast-moving 2011 homepage layout.',
    url: 'https://www.cnn.com'
  },
  {
    name: 'ESPN.com',
    description: 'Scores, highlights, and the sports page energy of the 2011 web.',
    url: 'https://www.espn.com'
  },
  {
    name: 'HGTV.com',
    description: 'Home inspiration and renovation stories from the design-heavy era.',
    url: 'https://www.hgtv.com'
  },
  {
    name: 'FoodNetwork.com',
    description: 'Recipe browsing, chef spots, and the web culture of cooking content.',
    url: 'https://www.foodnetwork.com'
  },
  {
    name: 'MTV.com',
    description: 'Music videos, celebrity buzz, and the social-media-leading generation.',
    url: 'https://www.mtv.com'
  }
];

const channelList = document.getElementById('channelList');
const channelCards = document.getElementById('channelCards');
const siteCards = document.getElementById('siteCards');
const networkBadge = document.getElementById('networkBadge');
const selectedNetworkTitle = document.getElementById('selectedNetworkTitle');
const selectedNetworkSummary = document.getElementById('selectedNetworkSummary');
const airTime = document.getElementById('airTime');
const channelNumber = document.getElementById('channelNumber');
const eraDate = document.getElementById('eraDate');
const eraStamp = document.getElementById('eraStamp');
const liveClock = document.getElementById('liveClock');
const liveDay = document.getElementById('liveDay');
const tvVideo = document.getElementById('tvVideo');
const openSiteBtn = document.getElementById('openSiteBtn');

let currentChannel = channelData[1];

function updateEraStamp() {
  const value = eraDate.value || '2011-06-15';
  eraStamp.textContent = value;

  const date = new Date(`${value}T12:00:00`);
  if (!Number.isNaN(date.getTime())) {
    const formatted = new Intl.DateTimeFormat('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    }).format(date);

    liveDay.textContent = formatted;
  }
}

function setTimeDisplay() {
  const now = new Date(2011, 5, 15, 20, 30, 0);
  const time = new Intl.DateTimeFormat('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  }).format(now);

  liveClock.textContent = time;
}

function renderChannelList() {
  channelList.innerHTML = channelData.map((channel) => `
    <li>
      <span>${channel.name}</span>
      <span>${channel.number}</span>
    </li>
  `).join('');
}

function renderChannels() {
  channelCards.innerHTML = channelData.map((channel) => `
    <button class="channel-card ${channel.name === currentChannel.name ? 'selected' : ''}" data-channel="${channel.name}">
      <div class="channel-top">
        <div class="channel-brand">${channel.name}<small>${channel.type}</small></div>
        <span class="live-badge">Live</span>
      </div>
      <div class="channel-meta">
        <span>${channel.number}</span>
        <span>${channel.time}</span>
      </div>
    </button>
  `).join('');

  channelCards.querySelectorAll('.channel-card').forEach((button) => {
    button.addEventListener('click', () => {
      const selectedChannel = channelData.find((entry) => entry.name === button.dataset.channel);
      if (selectedChannel) {
        selectChannel(selectedChannel);
      }
    });
  });
}

function renderSites() {
  siteCards.innerHTML = siteData.map((site) => `
    <div class="site-item">
      <a href="${site.url}" target="_blank" rel="noreferrer noopener">
        <strong>${site.name}</strong>
        <span>${site.description}</span>
      </a>
      <button data-url="${site.url}">Open</button>
    </div>
  `).join('');

  siteCards.querySelectorAll('button').forEach((button) => {
    button.addEventListener('click', () => {
      window.open(button.dataset.url, '_blank', 'noopener,noreferrer');
    });
  });
}

function selectChannel(channel) {
  currentChannel = channel;
  networkBadge.textContent = channel.name;
  networkBadge.style.background = `${channel.accent}22`;
  networkBadge.style.borderColor = `${channel.accent}66`;
  selectedNetworkTitle.textContent = channel.name;
  selectedNetworkSummary.textContent = channel.summary;
  airTime.textContent = channel.time;
  channelNumber.textContent = channel.number;
  openSiteBtn.dataset.url = channel.site;

  const source = document.createElement('source');
  source.src = channel.video;
  source.type = 'video/mp4';

  tvVideo.innerHTML = '';
  tvVideo.appendChild(source);
  tvVideo.load();
  tvVideo.play().catch(() => {
    // Silent fallback for browsers that block autoplay.
  });

  renderChannels();
}

openSiteBtn.addEventListener('click', () => {
  const url = openSiteBtn.dataset.url || currentChannel.site;
  window.open(url, '_blank', 'noopener,noreferrer');
});

eraDate.addEventListener('input', () => {
  updateEraStamp();

  const value = eraDate.value;
  const year = Number.parseInt(value.split('-')[0], 10);
  const buttons = document.querySelectorAll('.preset');
  buttons.forEach((button) => {
    button.classList.toggle('active', Number(button.dataset.year) === year);
  });
});

document.querySelectorAll('.preset').forEach((button) => {
  button.addEventListener('click', () => {
    const targetYear = Number(button.dataset.year);
    const targetDate = `${targetYear}-06-15`;
    eraDate.value = targetDate;
    updateEraStamp();

    document.querySelectorAll('.preset').forEach((preset) => {
      preset.classList.toggle('active', Number(preset.dataset.year) === targetYear);
    });
  });
});

setTimeDisplay();
updateEraStamp();
renderChannelList();
renderSites();
selectChannel(currentChannel);

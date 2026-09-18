const WEATHER_CONDITIONS = {
  clear_day: {
    title: 'Sunny & Clear',
    tag: 'Sunny & Clear',
    desc: 'Clear skies and bright sunshine.',
    icon: 'sun',
    bg: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=2560&q=85',
    credit: 'Sunny Alpine Valley'
  },
  clear_night: {
    title: 'Clear Night',
    tag: 'Starry Sky',
    desc: 'Clear night with starry skies and a cool breeze.',
    icon: 'moon',
    bg: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=2560&q=85',
    credit: 'Starry Night Sky'
  },
  partly_cloudy_day: {
    title: 'Partly Cloudy',
    tag: 'Partly Cloudy',
    desc: 'Partly cloudy with sunny intervals.',
    icon: 'cloud-sun',
    bg: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2560&q=85',
    credit: 'Partly Cloudy Mountain View'
  },
  partly_cloudy_night: {
    title: 'Partly Cloudy Night',
    tag: 'Partly Cloudy Night',
    desc: 'Partly cloudy night with a cool breeze.',
    icon: 'cloud-moon',
    bg: 'https://images.unsplash.com/photo-1509773896068-7fd415d91e2e?auto=format&fit=crop&w=2560&q=85',
    credit: 'Partly Cloudy Night Sky'
  },
  overcast_day: {
    title: 'Overcast',
    tag: 'Overcast',
    desc: 'Cloudy skies with limited sunshine.',
    icon: 'cloud',
    bg: 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?auto=format&fit=crop&w=2560&q=85',
    credit: 'Overcast Landscape'
  },
  overcast_night: {
    title: 'Overcast',
    tag: 'Cool Breeze',
    desc: 'Overcast night skies with a cool breeze.',
    icon: 'cloud',
    bg: 'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=2560&q=85',
    credit: 'Dark Night Sky'
  },
  fog_day: {
    title: 'Misty / Foggy',
    tag: 'Misty / Foggy',
    desc: 'Foggy conditions with reduced visibility.',
    icon: 'cloud-fog',
    bg: 'https://images.unsplash.com/photo-1487621167305-5d248087c724?auto=format&fit=crop&w=2560&q=85',
    credit: 'Misty Morning'
  },
  fog_night: {
    title: 'Misty / Foggy',
    tag: 'Cool Breeze',
    desc: 'Foggy and misty night with reduced visibility.',
    icon: 'cloud-fog',
    bg: 'https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=2560&q=85',
    credit: 'Misty Night Forest'
  },
  rain_day: {
    title: 'Light Rain',
    tag: 'Light Rain',
    desc: 'Light rain and scattered showers.',
    icon: 'cloud-rain',
    bg: 'https://images.unsplash.com/photo-1511497584788-87676104235f?auto=format&fit=crop&w=2560&q=85',
    credit: 'Rainy Landscape'
  },
  heavy_rain_day: {
    title: 'Heavy Rain',
    tag: 'Heavy Rain',
    desc: 'Heavy rain showers and downpours.',
    icon: 'cloud-rain',
    bg: 'https://images.unsplash.com/photo-1511497584788-87676104235f?auto=format&fit=crop&w=2560&q=85',
    credit: 'Heavy Rainfall'
  },
  rain_night: {
    title: 'Rainy Night',
    tag: 'Rainy Night',
    desc: 'Rainy night with passing showers and cool breeze.',
    icon: 'cloud-rain',
    bg: 'https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?auto=format&fit=crop&w=2560&q=85',
    credit: 'Rainy Night'
  },
  heavy_rain_night: {
    title: 'Rainy Night',
    tag: 'Rainy Night',
    desc: 'Heavy rain showers through the night.',
    icon: 'cloud-rain',
    bg: 'https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?auto=format&fit=crop&w=2560&q=85',
    credit: 'Heavy Night Rain'
  },
  snow_day: {
    title: 'Snowy',
    tag: 'Snowy',
    desc: 'Snowfall and cold temperatures.',
    icon: 'cloud-snow',
    bg: 'https://images.unsplash.com/photo-1491555103944-7c647fd857e6?auto=format&fit=crop&w=2560&q=85',
    credit: 'Snowy Mountain'
  },
  snow_night: {
    title: 'Snowy Night',
    tag: 'Cool Breeze',
    desc: 'Snowfall through the night.',
    icon: 'cloud-snow',
    bg: 'https://images.unsplash.com/photo-1517299321929-302ecde6d2c2?auto=format&fit=crop&w=2560&q=85',
    credit: 'Snowy Night'
  },
  thunderstorm_day: {
    title: 'Thunderstorm',
    tag: 'Thunderstorm',
    desc: 'Thunderstorm with lightning and rain.',
    icon: 'cloud-lightning',
    bg: 'https://images.unsplash.com/photo-1605727216801-e27ce1d0cc28?auto=format&fit=crop&w=2560&q=85',
    credit: 'Thunderstorm'
  },
  thunderstorm_night: {
    title: 'Thunderstorm',
    tag: 'Thunderstorm',
    desc: 'Night thunderstorm with lightning and rain.',
    icon: 'cloud-lightning',
    bg: 'https://images.unsplash.com/photo-1509114397022-ed747cca3f65?auto=format&fit=crop&w=2560&q=85',
    credit: 'Night Lightning'
  }
};

const DEFAULT_LOCATION = {
  name: 'Chandil',
  country: 'India',
  admin: 'Jharkhand',
  latitude: 22.95745,
  longitude: 86.05331
};

class WeatherApp {
  constructor() {
    this.unit = localStorage.getItem('aetheria_unit') || 'c';
    this.currentData = null;
    this.currentLocation = null;
    this.currentTimezone = 'Asia/Kolkata';
    this.searchHistory = JSON.parse(localStorage.getItem('aetheria_history') || '[]');
    this.debounceTimer = null;
    this.activeBgLayer = 1;
    this.currentBgUrl = 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=2560&q=85';
    this.speechSynth = window.speechSynthesis;
    this.isSpeaking = false;

    this.cacheDom();
    this.bindEvents();
    this.initClock();
    this.initApp();
  }

  cacheDom() {
    this.bgLayer1 = document.getElementById('bg-layer-1');
    this.bgLayer2 = document.getElementById('bg-layer-2');
    this.liveTime = document.getElementById('live-time');
    this.searchInput = document.getElementById('search-input');
    this.searchContainer = document.getElementById('search-container');
    this.autocompleteDropdown = document.getElementById('autocomplete-dropdown');
    this.historyDropdown = document.getElementById('history-dropdown');
    this.historyItems = document.getElementById('history-items');
    this.historyToggleBtn = document.getElementById('search-history-toggle');
    this.clearHistoryBtn = document.getElementById('clear-history-btn');
    this.currentGeoBtn = document.getElementById('current-geo-btn');
    this.unitCBtn = document.getElementById('unit-c');
    this.unitFBtn = document.getElementById('unit-f');
    this.voiceNarrateBtn = document.getElementById('voice-narrate-btn');
    this.voicePulseRing = document.getElementById('voice-pulse-ring');
    this.voiceAura = document.getElementById('voice-aura');
    this.voiceMicIcon = document.getElementById('voice-mic-icon');
    this.locationName = document.getElementById('location-name');
    this.landscapeTag = document.getElementById('landscape-tag');
    this.mainTemp = document.getElementById('main-temp');
    this.apparentTemp = document.getElementById('apparent-temp');
    this.tempHigh = document.getElementById('temp-high');
    this.tempLow = document.getElementById('temp-low');
    this.conditionTitle = document.getElementById('condition-title');
    this.conditionNarrative = document.getElementById('condition-narrative');
    this.conditionIconBox = document.getElementById('condition-icon-box');
    this.humidityVal = document.getElementById('humidity-val');
    this.humidityDesc = document.getElementById('humidity-desc');
    this.windSpeed = document.getElementById('wind-speed');
    this.windDirection = document.getElementById('wind-direction');
    this.windNeedleBox = document.getElementById('wind-needle-box');
    this.uvVal = document.getElementById('uv-val');
    this.uvDesc = document.getElementById('uv-desc');
    this.aqiVal = document.getElementById('aqi-val');
    this.aqiBadge = document.getElementById('aqi-badge');
    this.aqiDesc = document.getElementById('aqi-desc');
    this.pressureVal = document.getElementById('pressure-val');
    this.pressureDesc = document.getElementById('pressure-desc');
    this.sunriseVal = document.getElementById('sunrise-val');
    this.sunsetVal = document.getElementById('sunset-val');
    this.hourlyTrack = document.getElementById('hourly-scroll-track');
    this.dailyGrid = document.getElementById('daily-grid');
    this.toastShelf = document.getElementById('toast-shelf');
    this.photoCredit = document.getElementById('photo-credit');
  }

  bindEvents() {
    this.unitCBtn.addEventListener('click', () => this.setUnit('c'));
    this.unitFBtn.addEventListener('click', () => this.setUnit('f'));

    this.searchInput.addEventListener('input', (e) => {
      clearTimeout(this.debounceTimer);
      const query = e.target.value.trim();
      if (!query) {
        this.autocompleteDropdown.classList.add('hidden');
        return;
      }
      this.debounceTimer = setTimeout(() => this.searchPlaces(query), 280);
    });

    this.searchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const query = this.searchInput.value.trim();
        if (query) {
          this.searchDirectLocation(query);
        }
      }
    });

    this.historyToggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      this.toggleHistoryDropdown();
    });

    this.clearHistoryBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      this.clearHistory();
    });

    this.currentGeoBtn.addEventListener('click', () => this.autoDetectLocation());

    this.voiceNarrateBtn.addEventListener('click', () => this.toggleVoiceNarration());

    document.addEventListener('click', (e) => {
      if (!this.searchContainer.contains(e.target)) {
        this.autocompleteDropdown.classList.add('hidden');
        this.historyDropdown.classList.add('hidden');
      }
    });

    window.addEventListener('online', () => {
      this.showToast('Network restored. Live weather data updated.', 'success');
    });

    window.addEventListener('offline', () => {
      this.showToast('Operating in offline mode.', 'warning');
    });
  }

  initClock() {
    const update = () => {
      const now = new Date();
      try {
        const options = {
          timeZone: this.currentTimezone || undefined,
          weekday: 'short',
          month: 'short',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true
        };
        this.liveTime.textContent = new Intl.DateTimeFormat('en-US', options).format(now);
      } catch {
        this.liveTime.textContent = now.toLocaleDateString(undefined, {
          weekday: 'short',
          month: 'short',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit'
        });
      }
    };
    update();
    setInterval(update, 1000);
  }

  initApp() {
    this.updateUnitButtonsUI();
    this.autoDetectLocation();
  }

  async autoDetectLocation() {
    let gpsResolved = false;

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (pos) => {
          gpsResolved = true;
          const lat = pos.coords.latitude;
          const lon = pos.coords.longitude;
          const loc = await this.reverseGeocode(lat, lon);
          this.loadLocation(loc);
        },
        async () => {
          if (!gpsResolved) {
            await this.fallbackIpLocation();
          }
        },
        { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }
      );
    }

    try {
      const ipRes = await fetch('https://api.bigdatacloud.net/data/reverse-geocode-client');
      if (ipRes.ok && !gpsResolved) {
        const data = await ipRes.json();
        if (data.latitude && data.longitude && !gpsResolved) {
          const loc = {
            name: data.locality || data.city || data.principalSubdivision || 'Chandil',
            country: data.countryName || 'India',
            admin: data.principalSubdivision || 'Jharkhand',
            latitude: data.latitude,
            longitude: data.longitude
          };
          this.loadLocation(loc);
        }
      }
    } catch {
      if (!gpsResolved && !this.currentLocation) {
        this.loadLocation(DEFAULT_LOCATION);
      }
    }
  }

  async fallbackIpLocation() {
    try {
      const res = await fetch('https://api.bigdatacloud.net/data/reverse-geocode-client');
      if (res.ok) {
        const data = await res.json();
        if (data.latitude && data.longitude) {
          const loc = {
            name: data.locality || data.city || data.principalSubdivision || 'Chandil',
            country: data.countryName || 'India',
            admin: data.principalSubdivision || 'Jharkhand',
            latitude: data.latitude,
            longitude: data.longitude
          };
          this.loadLocation(loc);
          return;
        }
      }
    } catch {
      this.loadLocation(DEFAULT_LOCATION);
    }
  }

  async reverseGeocode(latitude, longitude) {
    try {
      const res = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`);
      if (res.ok) {
        const data = await res.json();
        return {
          name: data.locality || data.city || data.principalSubdivision || 'Chandil',
          country: data.countryName || 'India',
          admin: data.principalSubdivision || 'Jharkhand',
          latitude,
          longitude
        };
      }
    } catch {
      return {
        name: 'Chandil',
        country: 'India',
        admin: 'Jharkhand',
        latitude,
        longitude
      };
    }
    return {
      name: 'Chandil',
      country: 'India',
      admin: 'Jharkhand',
      latitude,
      longitude
    };
  }

  async searchPlaces(query) {
    try {
      const url = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(query)}&count=6&language=en&format=json`;
      const res = await fetch(url);
      const data = await res.json();

      if (!data.results || data.results.length === 0) {
        this.autocompleteDropdown.innerHTML = `
          <div class="p-3 text-xs text-slate-400 text-center">No locations found for "${query}"</div>
        `;
        this.autocompleteDropdown.classList.remove('hidden');
        return;
      }

      this.renderAutocomplete(data.results);
    } catch {
      this.autocompleteDropdown.classList.add('hidden');
    }
  }

  async searchDirectLocation(query) {
    try {
      this.autocompleteDropdown.classList.add('hidden');
      const url = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(query)}&count=1&language=en&format=json`;
      const res = await fetch(url);
      const data = await res.json();
      if (data.results && data.results.length > 0) {
        const loc = data.results[0];
        this.loadLocation({
          name: loc.name,
          country: loc.country || '',
          admin: loc.admin1 || '',
          latitude: loc.latitude,
          longitude: loc.longitude
        });
        this.searchInput.value = '';
      } else {
        this.showToast(`Location "${query}" not found.`, 'warning');
      }
    } catch {
      this.showToast('Unable to search location.', 'error');
    }
  }

  renderAutocomplete(results) {
    this.autocompleteDropdown.innerHTML = '';
    results.forEach((place) => {
      const item = document.createElement('button');
      item.type = 'button';
      item.className = 'w-full text-left px-4 py-3 hover:bg-white/10 flex items-center justify-between transition-colors group';

      const region = [place.admin1, place.country].filter(Boolean).join(', ');
      item.innerHTML = `
        <div class="flex items-center gap-2.5">
          <i data-lucide="map-pin" class="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform"></i>
          <div>
            <span class="text-sm font-semibold text-white">${place.name}</span>
            <span class="text-xs text-slate-400 block">${region}</span>
          </div>
        </div>
        <span class="text-[10px] text-slate-400 font-mono">${place.latitude.toFixed(2)}°, ${place.longitude.toFixed(2)}°</span>
      `;

      item.addEventListener('click', () => {
        this.loadLocation({
          name: place.name,
          country: place.country || '',
          admin: place.admin1 || '',
          latitude: place.latitude,
          longitude: place.longitude
        });
        this.autocompleteDropdown.classList.add('hidden');
        this.searchInput.value = '';
      });

      this.autocompleteDropdown.appendChild(item);
    });

    lucide.createIcons({ root: this.autocompleteDropdown });
    this.autocompleteDropdown.classList.remove('hidden');
  }

  toggleHistoryDropdown() {
    if (!this.historyDropdown.classList.contains('hidden')) {
      this.historyDropdown.classList.add('hidden');
      return;
    }
    this.renderHistory();
    this.historyDropdown.classList.remove('hidden');
    this.autocompleteDropdown.classList.add('hidden');
  }

  renderHistory() {
    this.historyItems.innerHTML = '';
    if (this.searchHistory.length === 0) {
      this.historyItems.innerHTML = '<span class="text-xs text-slate-400 py-2">No recent locations.</span>';
      return;
    }

    this.searchHistory.forEach((item) => {
      const pill = document.createElement('button');
      pill.type = 'button';
      pill.className = 'px-3 py-1.5 rounded-xl bg-white/5 hover:bg-emerald-500/20 text-xs text-slate-200 hover:text-emerald-300 border border-white/10 hover:border-emerald-500/30 transition-all flex items-center gap-1.5';
      pill.innerHTML = `
        <span>${item.name}</span>
        <span class="text-[10px] text-slate-400">(${item.country || 'Global'})</span>
      `;
      pill.addEventListener('click', () => {
        this.loadLocation(item);
        this.historyDropdown.classList.add('hidden');
      });
      this.historyItems.appendChild(pill);
    });
  }

  saveToHistory(location) {
    const existsIndex = this.searchHistory.findIndex(
      (h) => h.name.toLowerCase() === location.name.toLowerCase() && h.country === location.country
    );
    if (existsIndex !== -1) {
      this.searchHistory.splice(existsIndex, 1);
    }
    this.searchHistory.unshift(location);
    if (this.searchHistory.length > 8) {
      this.searchHistory.pop();
    }
    localStorage.setItem('aetheria_history', JSON.stringify(this.searchHistory));
  }

  clearHistory() {
    this.searchHistory = [];
    localStorage.removeItem('aetheria_history');
    this.renderHistory();
  }

  setUnit(u) {
    if (this.unit === u) return;
    this.unit = u;
    localStorage.setItem('aetheria_unit', u);
    this.updateUnitButtonsUI();
    if (this.currentData) {
      this.renderWeather(this.currentData);
    }
  }

  updateUnitButtonsUI() {
    if (this.unit === 'c') {
      this.unitCBtn.className = 'px-3 py-1.5 rounded-xl text-xs font-bold transition-all bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20';
      this.unitFBtn.className = 'px-3 py-1.5 rounded-xl text-xs font-bold transition-all text-slate-300 hover:text-white';
    } else {
      this.unitFBtn.className = 'px-3 py-1.5 rounded-xl text-xs font-bold transition-all bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20';
      this.unitCBtn.className = 'px-3 py-1.5 rounded-xl text-xs font-bold transition-all text-slate-300 hover:text-white';
    }
  }

  formatTemp(celsius) {
    if (celsius === null || celsius === undefined) return '--';
    if (this.unit === 'f') {
      return Math.round((celsius * 9) / 5 + 32);
    }
    return Math.round(celsius);
  }

  formatTimeFromISO(isoStr) {
    if (!isoStr) return '--:--';
    const hour = parseInt(isoStr.slice(11, 13), 10);
    const min = isoStr.slice(14, 16);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const displayHour = hour % 12 === 0 ? 12 : hour % 12;
    return `${displayHour}:${min} ${ampm}`;
  }

  isNightTime(cur, daily) {
    if (cur && typeof cur.is_day === 'number') {
      if (cur.is_day === 0) return true;
      if (cur.is_day === 1) return false;
    }
    if (daily && daily.sunrise && daily.sunset && daily.sunrise[0] && daily.sunset[0] && cur && cur.time) {
      const curTime = cur.time;
      const sunrise = daily.sunrise[0];
      const sunset = daily.sunset[0];
      if (curTime < sunrise || curTime >= sunset) {
        return true;
      }
      return false;
    }
    const currentHour = new Date().getHours();
    return currentHour >= 18 || currentHour < 6;
  }

  async loadLocation(location) {
    this.currentLocation = location;
    this.saveToHistory(location);

    const displayName = [location.name, location.admin, location.country].filter(Boolean).join(', ');
    this.locationName.textContent = displayName;

    try {
      const [weatherRes, aqiRes] = await Promise.all([
        fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${location.latitude}&longitude=${location.longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,weather_code,surface_pressure,wind_speed_10m,wind_direction_10m&hourly=temperature_2m,weather_code,is_day&daily=weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max&timezone=auto`
        ),
        fetch(
          `https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${location.latitude}&longitude=${location.longitude}&current=european_aqi,us_aqi,pm2_5,pm10`
        ).catch(() => null)
      ]);

      if (!weatherRes.ok) {
        throw new Error('Weather feed unavailable');
      }

      const weatherData = await weatherRes.json();
      let aqiData = null;
      if (aqiRes && aqiRes.ok) {
        aqiData = await aqiRes.json();
      }

      this.currentTimezone = weatherData.timezone || 'Asia/Kolkata';

      this.currentData = {
        weather: weatherData,
        aqi: aqiData
      };

      this.renderWeather(this.currentData);
    } catch {
      this.showToast('Could not fetch weather data.', 'error');
    }
  }

  resolveCondition(code, isDay) {
    if (code === 0) {
      return isDay ? WEATHER_CONDITIONS.clear_day : WEATHER_CONDITIONS.clear_night;
    }
    if (code === 1 || code === 2) {
      return isDay ? WEATHER_CONDITIONS.partly_cloudy_day : WEATHER_CONDITIONS.partly_cloudy_night;
    }
    if (code === 3) {
      return isDay ? WEATHER_CONDITIONS.overcast_day : WEATHER_CONDITIONS.overcast_night;
    }
    if (code === 45 || code === 48) {
      return isDay ? WEATHER_CONDITIONS.fog_day : WEATHER_CONDITIONS.fog_night;
    }
    if ([51, 53, 55, 56, 57, 61].includes(code)) {
      return isDay ? WEATHER_CONDITIONS.rain_day : WEATHER_CONDITIONS.rain_night;
    }
    if ([63, 65, 66, 67, 80, 81, 82].includes(code)) {
      return isDay ? WEATHER_CONDITIONS.heavy_rain_day : WEATHER_CONDITIONS.heavy_rain_night;
    }
    if ([71, 73, 75, 77, 85, 86].includes(code)) {
      return isDay ? WEATHER_CONDITIONS.snow_day : WEATHER_CONDITIONS.snow_night;
    }
    if ([95, 96, 99].includes(code)) {
      return isDay ? WEATHER_CONDITIONS.thunderstorm_day : WEATHER_CONDITIONS.thunderstorm_night;
    }
    return isDay ? WEATHER_CONDITIONS.partly_cloudy_day : WEATHER_CONDITIONS.partly_cloudy_night;
  }

  updateBackground(condition) {
    if (condition.bg === this.currentBgUrl) return;
    this.currentBgUrl = condition.bg;

    if (this.activeBgLayer === 1) {
      this.bgLayer2.style.backgroundImage = `url('${condition.bg}')`;
      this.bgLayer2.classList.remove('opacity-0');
      this.bgLayer2.classList.add('opacity-100');
      this.bgLayer1.classList.remove('opacity-100');
      this.bgLayer1.classList.add('opacity-0');
      this.activeBgLayer = 2;
    } else {
      this.bgLayer1.style.backgroundImage = `url('${condition.bg}')`;
      this.bgLayer1.classList.remove('opacity-0');
      this.bgLayer1.classList.add('opacity-100');
      this.bgLayer2.classList.remove('opacity-100');
      this.bgLayer2.classList.add('opacity-0');
      this.activeBgLayer = 1;
    }
    this.photoCredit.textContent = `${condition.credit} • Live Wallpaper`;
  }

  generateWeatherNarrative(condition, cur) {
    const temp = this.formatTemp(cur.temperature_2m);
    const unit = this.unit.toUpperCase();
    const windSpeed = this.unit === 'f' ? Math.round(cur.wind_speed_10m * 0.621371) : Math.round(cur.wind_speed_10m);
    const windUnit = this.unit === 'f' ? 'mph' : 'km/h';
    return `${condition.desc} Currently ${temp}°${unit} with ${cur.relative_humidity_2m}% humidity and ${windSpeed} ${windUnit} winds.`;
  }

  renderWeather(data) {
    const cur = data.weather.current;
    const daily = data.weather.daily;
    const hourly = data.weather.hourly;
    const aqi = data.aqi ? data.aqi.current : null;

    const isNight = this.isNightTime(cur, daily);
    const isDay = !isNight;
    const condition = this.resolveCondition(cur.weather_code, isDay);

    this.updateBackground(condition);

    this.landscapeTag.textContent = condition.tag;
    this.mainTemp.textContent = `${this.formatTemp(cur.temperature_2m)}°`;
    this.apparentTemp.textContent = `Feels like ${this.formatTemp(cur.apparent_temperature)}°`;
    this.tempHigh.textContent = `H: ${this.formatTemp(daily.temperature_2m_max[0])}°`;
    this.tempLow.textContent = `L: ${this.formatTemp(daily.temperature_2m_min[0])}°`;

    this.conditionTitle.textContent = condition.title;
    this.conditionNarrative.textContent = this.generateWeatherNarrative(condition, cur);

    this.conditionIconBox.innerHTML = `<i data-lucide="${condition.icon}" class="w-8 h-8"></i>`;

    this.humidityVal.textContent = `${cur.relative_humidity_2m}%`;
    if (cur.relative_humidity_2m < 35) {
      this.humidityDesc.textContent = 'Dry air';
    } else if (cur.relative_humidity_2m <= 65) {
      this.humidityDesc.textContent = 'Comfortable humidity';
    } else {
      this.humidityDesc.textContent = 'High humidity';
    }

    const windSpeedValue = this.unit === 'f' ? Math.round(cur.wind_speed_10m * 0.621371) : Math.round(cur.wind_speed_10m);
    const windUnit = this.unit === 'f' ? 'mph' : 'km/h';
    this.windSpeed.textContent = `${windSpeedValue} ${windUnit}`;
    this.windDirection.textContent = this.degreesToCompass(cur.wind_direction_10m);
    this.windNeedleBox.style.transform = `rotate(${cur.wind_direction_10m}deg)`;

    if (isNight) {
      this.uvVal.textContent = '0';
      this.uvDesc.textContent = '0 None';
    } else {
      const currentUv = daily.uv_index_max ? daily.uv_index_max[0] : 0;
      this.uvVal.textContent = currentUv.toFixed(1);
      if (currentUv < 3) {
        this.uvDesc.textContent = 'Low';
      } else if (currentUv < 6) {
        this.uvDesc.textContent = 'Moderate';
      } else if (currentUv < 8) {
        this.uvDesc.textContent = 'High';
      } else {
        this.uvDesc.textContent = 'Very High';
      }
    }

    if (aqi && (aqi.european_aqi !== undefined || aqi.us_aqi !== undefined || aqi.pm2_5 !== undefined)) {
      const aqiScore = aqi.european_aqi ?? aqi.us_aqi ?? Math.round(aqi.pm2_5 * 2.5);
      this.aqiVal.textContent = aqiScore;
      if (aqiScore <= 20) {
        this.aqiBadge.textContent = 'Good';
        this.aqiBadge.className = 'text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30';
        this.aqiDesc.textContent = 'Good air quality';
      } else if (aqiScore <= 40) {
        this.aqiBadge.textContent = 'Fair';
        this.aqiBadge.className = 'text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-teal-500/20 text-teal-300 border border-teal-500/30';
        this.aqiDesc.textContent = 'Fair air quality';
      } else if (aqiScore <= 60) {
        this.aqiBadge.textContent = 'Moderate';
        this.aqiBadge.className = 'text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30';
        this.aqiDesc.textContent = 'Moderate air quality';
      } else {
        this.aqiBadge.textContent = 'Poor';
        this.aqiBadge.className = 'text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/30';
        this.aqiDesc.textContent = 'Poor air quality';
      }
    } else {
      this.aqiVal.textContent = '--';
      this.aqiBadge.textContent = 'Pending';
      this.aqiBadge.className = 'text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-slate-500/20 text-slate-300 border border-slate-500/30';
      this.aqiDesc.textContent = 'Air quality pending';
    }

    this.pressureVal.textContent = `${Math.round(cur.surface_pressure)} hPa`;
    if (cur.surface_pressure > 1015) {
      this.pressureDesc.textContent = 'High pressure';
    } else if (cur.surface_pressure < 1005) {
      this.pressureDesc.textContent = 'Low pressure';
    } else {
      this.pressureDesc.textContent = 'Normal pressure';
    }

    if (daily.sunrise && daily.sunrise[0]) {
      this.sunriseVal.textContent = this.formatTimeFromISO(daily.sunrise[0]);
    }
    if (daily.sunset && daily.sunset[0]) {
      this.sunsetVal.textContent = this.formatTimeFromISO(daily.sunset[0]);
    }

    this.renderHourly(hourly, cur);
    this.renderDaily(daily);

    lucide.createIcons();
  }

  degreesToCompass(deg) {
    const directions = ['North', 'North-East', 'East', 'South-East', 'South', 'South-West', 'West', 'North-West'];
    const index = Math.round((deg % 360) / 45) % 8;
    return `${directions[index]} (${deg}°)`;
  }

  findCurrentHourIndex(hourlyTimes, currentTimeStr) {
    if (!currentTimeStr || !hourlyTimes || hourlyTimes.length === 0) return 0;
    const currentHourPrefix = currentTimeStr.slice(0, 13);
    const exactIndex = hourlyTimes.findIndex((t) => t.startsWith(currentHourPrefix));
    if (exactIndex !== -1) return exactIndex;

    const fallbackIndex = hourlyTimes.findIndex((t) => t >= currentHourPrefix + ':00');
    if (fallbackIndex !== -1) return fallbackIndex;

    return 0;
  }

  formatHourLabel(timeStr) {
    const hour = parseInt(timeStr.slice(11, 13), 10);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const displayHour = hour % 12 === 0 ? 12 : hour % 12;
    return `${displayHour} ${ampm}`;
  }

  renderHourly(hourly, cur) {
    this.hourlyTrack.innerHTML = '';
    const curHourIndex = this.findCurrentHourIndex(hourly.time, cur ? cur.time : null);
    const hoursToDisplay = 24;

    for (let offset = 0; offset < hoursToDisplay && (curHourIndex + offset) < hourly.time.length; offset++) {
      const idx = curHourIndex + offset;
      const timeStr = hourly.time[idx];
      const hourStr = this.formatHourLabel(timeStr);
      const label = offset === 0 ? `Now / ${hourStr}` : hourStr;
      const temp = offset === 0 ? this.formatTemp(cur.temperature_2m) : this.formatTemp(hourly.temperature_2m[idx]);
      const isSlotDay = offset === 0 ? (cur.is_day === 1) : (hourly.is_day[idx] === 1);
      const code = offset === 0 ? cur.weather_code : hourly.weather_code[idx];
      const condition = this.resolveCondition(code, isSlotDay);

      const card = document.createElement('div');
      card.className = `min-w-[95px] p-3.5 rounded-2xl flex flex-col items-center justify-between gap-3 backdrop-blur-xl border transition-all duration-300 snap-start flex-shrink-0 ${
        offset === 0 
          ? 'bg-emerald-500/20 border-emerald-400/40 shadow-lg shadow-emerald-950/40' 
          : 'bg-slate-900/40 hover:bg-slate-900/60 border-white/10'
      }`;

      card.innerHTML = `
        <span class="text-xs font-semibold ${offset === 0 ? 'text-emerald-300' : 'text-slate-300'} whitespace-nowrap">${label}</span>
        <div class="p-1.5 text-emerald-300">
          <i data-lucide="${condition.icon}" class="w-5 h-5"></i>
        </div>
        <span class="text-sm font-bold text-white">${temp}°</span>
      `;

      this.hourlyTrack.appendChild(card);
    }
  }

  renderDaily(daily) {
    this.dailyGrid.innerHTML = '';
    const daysCount = Math.min(7, daily.time.length);

    for (let i = 0; i < daysCount; i++) {
      const date = new Date(daily.time[i]);
      const dayLabel = i === 0 ? 'Today' : date.toLocaleDateString([], { weekday: 'short' });
      const dateLabel = date.toLocaleDateString([], { month: 'numeric', day: 'numeric' });
      const max = this.formatTemp(daily.temperature_2m_max[i]);
      const min = this.formatTemp(daily.temperature_2m_min[i]);
      const condition = this.resolveCondition(daily.weather_code[i], true);

      const card = document.createElement('div');
      card.className = `p-4 rounded-3xl backdrop-blur-xl border transition-all duration-300 flex flex-col justify-between group ${
        i === 0 
          ? 'bg-emerald-950/30 border-emerald-500/30 shadow-xl' 
          : 'bg-slate-900/40 hover:bg-slate-900/50 border-white/15 shadow-xl'
      }`;

      card.innerHTML = `
        <div class="flex items-center justify-between">
          <div>
            <span class="text-xs font-bold text-white uppercase tracking-wider block">${dayLabel}</span>
            <span class="text-[10px] text-slate-400 block">${dateLabel}</span>
          </div>
          <div class="p-1 text-emerald-300 group-hover:scale-110 transition-transform">
            <i data-lucide="${condition.icon}" class="w-5 h-5"></i>
          </div>
        </div>
        <div class="mt-4">
          <p class="text-[11px] text-slate-300 line-clamp-1 mb-2 font-medium">${condition.title}</p>
          <div class="flex items-center justify-between text-xs font-bold">
            <span class="text-white">${max}°</span>
            <div class="flex-1 mx-2 h-1 rounded-full bg-white/10 overflow-hidden relative">
              <div class="absolute inset-y-0 left-1/4 right-1/4 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full"></div>
            </div>
            <span class="text-slate-400">${min}°</span>
          </div>
        </div>
      `;

      this.dailyGrid.appendChild(card);
    }
  }

  toggleVoiceNarration() {
    if (!('speechSynthesis' in window)) {
      this.showToast('Speech synthesis not supported on this browser.', 'warning');
      return;
    }

    if (this.isSpeaking || this.speechSynth.speaking) {
      this.stopVoiceNarration();
      return;
    }

    this.startVoiceNarration();
  }

  startVoiceNarration() {
    if (!this.currentData || !this.currentLocation) {
      this.showToast('Weather data is still loading.', 'info');
      return;
    }

    this.speechSynth.cancel();

    const cur = this.currentData.weather.current;
    const daily = this.currentData.weather.daily;
    const isNight = this.isNightTime(cur, daily);
    const cond = this.resolveCondition(cur.weather_code, !isNight);
    const tempNum = this.formatTemp(cur.temperature_2m);
    const feelsLikeNum = this.formatTemp(cur.apparent_temperature);
    const unitWord = this.unit === 'c' ? 'Celsius' : 'Fahrenheit';
    const windSpeedNum = this.unit === 'f' ? Math.round(cur.wind_speed_10m * 0.621371) : Math.round(cur.wind_speed_10m);
    const windUnitWord = this.unit === 'f' ? 'miles per hour' : 'kilometers per hour';
    const loc = this.currentLocation.name;
    const timePhase = isNight ? 'night' : 'day';

    const speechText = `In ${loc}, it is currently ${timePhase} with ${cond.title.toLowerCase()}. The temperature is ${tempNum} degrees ${unitWord}, feeling like ${feelsLikeNum} degrees. Humidity is ${cur.relative_humidity_2m} percent with wind speed of ${windSpeedNum} ${windUnitWord}.`;

    const utterance = new SpeechSynthesisUtterance(speechText);
    utterance.rate = 0.95;
    utterance.pitch = 1.0;

    const voices = this.speechSynth.getVoices();
    const naturalVoice = voices.find(
      (v) => (v.name.includes('Natural') || v.name.includes('Google') || v.name.includes('Samantha') || v.name.includes('Daniel')) && v.lang.startsWith('en')
    ) || voices.find((v) => v.lang.startsWith('en'));

    if (naturalVoice) {
      utterance.voice = naturalVoice;
    }

    this.isSpeaking = true;
    this.voicePulseRing.classList.remove('hidden');
    this.voiceAura.classList.remove('hidden');
    this.voiceNarrateBtn.classList.add('pulse-speaking', 'border-emerald-400');
    this.voiceMicIcon.setAttribute('data-lucide', 'square');
    lucide.createIcons({ root: this.voiceNarrateBtn });

    utterance.onend = () => this.stopVoiceNarration();
    utterance.onerror = () => this.stopVoiceNarration();

    this.speechSynth.speak(utterance);
  }

  stopVoiceNarration() {
    this.speechSynth.cancel();
    this.isSpeaking = false;
    this.voicePulseRing.classList.add('hidden');
    this.voiceAura.classList.add('hidden');
    this.voiceNarrateBtn.classList.remove('pulse-speaking', 'border-emerald-400');
    this.voiceMicIcon.setAttribute('data-lucide', 'mic');
    lucide.createIcons({ root: this.voiceNarrateBtn });
  }

  showToast(message, type = 'info') {
    const toast = document.createElement('div');
    const colorClasses = {
      info: 'bg-slate-900/90 border-cyan-500/40 text-cyan-200',
      success: 'bg-slate-900/90 border-emerald-500/40 text-emerald-200',
      warning: 'bg-slate-900/90 border-amber-500/40 text-amber-200',
      error: 'bg-slate-900/90 border-rose-500/40 text-rose-200'
    }[type] || 'bg-slate-900/90 border-white/20 text-slate-200';

    toast.className = `fade-in px-4 py-3 rounded-2xl border backdrop-blur-xl shadow-2xl text-xs flex items-center gap-2 pointer-events-auto transition-all ${colorClasses}`;
    toast.innerHTML = `
      <span class="w-2 h-2 rounded-full bg-current"></span>
      <span>${message}</span>
    `;

    this.toastShelf.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(6px)';
      setTimeout(() => toast.remove(), 400);
    }, 4200);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new WeatherApp();
});

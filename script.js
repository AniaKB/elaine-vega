const englishContent = {
  name: 'Elaine Vega',
  gallery: 'Gallery',
  reels: 'Reels',
  wiki: 'Asian Wiki',
  contact: 'Contact',
};

const koreanContent = {
  name: '일레인 베가',
  gallery: '갤러리',
  reels: '릴',
  wiki: '아시아 위키',
  contact: '연락하다',
  articles:['https://newsen.com/news_view.php?uid=202210041340251910','https://discord.com/channels/740679561007726702/1018308011179126886/1048842206116581477']
};

function toggleLanguage() {
  const selectedLanguage = document.querySelector('input[name="language"]:checked').value;

  const content = selectedLanguage === 'en' ? englishContent : koreanContent;
  document.getElementById('name').textContent = content.name;
  document.getElementById('gallery').textContent = content.gallery;
  document.getElementById('reels').textContent = content.reels;
  document.getElementById('wiki').textContent = content.wiki;
  document.getElementById('contact').textContent = content.contact;
}

document.querySelectorAll('input[name="language"]').forEach((radio) => {
  radio.addEventListener('change', toggleLanguage);
});

toggleLanguage();
const englishContent = {
  name: 'Elaine Vega',
  gallery: 'Gallery',
  reels: 'Reels',
  wiki: 'Asian Wiki',
  contact: 'Contact',
  p1: 'I am an actress currently living in Korea. As an American-German, I am multicultural and have lived in Russia and Germany.',
  p2: 'I speak English, Korean, German and Spanish.',
  p3: 'My hobbies include Running, Writing Screenplays & Short Stories, drinking Coffee or Tea, and Reading.',
  p4: 'I also used to take Fencing and Ballroom Dancing classes.',
  about: 'About me:',
  galleryheader: 'Gallery:',
  };

const koreanContent = {
  name: '일레인 베가',
  gallery: '갤러리',
  reels: '릴',
  wiki: '아시아 위키',
  contact: '연락하다',
  p1: '저는 현재 한국에 거주하고 있는 배우입니다. 미국계 독일인으로서 저는 다문화이며 러시아와 독일에서 살았습니다.',
  p2: '저는 영어, 한국어, 독일어, 스페인어를 구사합니다.',
  p3: '제 취미는 달리기, 시나리오 및 단편 소설 쓰기, 커피 또는 차 마시기, 독서입니다.',
  p4: '펜싱과 볼룸 댄스 수업도 듣곤 했습니다.',
  about: '나에 대해:',
  galleryheader: '갤러리:',
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
  document.getElementById('p1').textContent = content.p1;
  document.getElementById('p2').textContent = content.p2;
  document.getElementById('p3').textContent = content.p3;
  document.getElementById('p4').textContent = content.p4;
  document.getElementById('about').textContent = content.about;
  document.getElementById('galleryheader').textContent = content.galleryheader;
}

document.querySelectorAll('input[name="language"]').forEach((radio) => {
  radio.addEventListener('change', toggleLanguage);
});

toggleLanguage();
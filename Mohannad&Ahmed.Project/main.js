
$(document).ready(function(){

  // Portfolio Data
  const portfolioData = [
    {title:"مشروع إعادة إعمار", desc:"توضيح مراحل إعادة إعمار المنازل", img:"assets/images/portfolio1.jpg"},
    {title:"منصة فرص عمل", desc:"عرض فرص عمل مؤقتة للمجتمع", img:"assets/images/portfolio2.jpg"},
    {title:"دعم نفسي", desc:"جلسات توعوية ودعم نفسي", img:"assets/images/portfolio3.jpg"}
  ];

  // Render Portfolio Cards
  portfolioData.forEach(item=>{
    $('#portfolio-cards').append(`
      <div class="col-md-4">
        <div class="portfolio-card">
          <img src="${item.img}" alt="${item.title}">
          <div class="portfolio-card-body">
            <h5>${item.title}</h5>
            <p>${item.desc}</p>
          </div>
        </div>
      </div>
    `);
  });

  // Contact Form Submission
  $('#contact-form').submit(function(e){
    e.preventDefault();
    const form = this;
    $.ajax({
      url: form.action,
      method: form.method,
      data: $(form).serialize(),
      dataType: "json",
      success: function(){
        $('#success-message').fadeIn().delay(3000).fadeOut();
        form.reset();
      },
      error: function(){
        alert("حصل خطأ، حاول مرة أخرى.");
      }
    });
  });

  // Tables Section - بيانات ديناميكية
  const aidData = [
    {type:"غذاء", area:"الشجاعية", date:"2026-01-30", status:"متاح"},
    {type:"دواء", area:"النصر", date:"2026-01-28", status:"مكتمل"},
    {type:"مياه", area:"الرمال", date:"2026-01-29", status:"متاح"},
    {type:"إيواء", area:"بيت حانون", date:"2026-01-30", status:"متاح"}
  ];

  function renderTable(data) {
    const tbody = $('#data-table tbody');
    tbody.empty();
    data.forEach(item=>{
      tbody.append(`
        <tr>
          <td>${item.type}</td>
          <td>${item.area}</td>
          <td>${item.date}</td>
          <td>${item.status}</td>
        </tr>
      `);
    });
  }

  renderTable(aidData);

  // Filter Table
  $('#search-input').on('keyup', function(){
    const value = $(this).val().toLowerCase();
    const filtered = aidData.filter(item => item.area.toLowerCase().includes(value));
    renderTable(filtered);
  });

});
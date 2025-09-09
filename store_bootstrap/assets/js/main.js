const PRODUCTS = [
  {id:1, title:"Nồi chiên không dầu 5L", price:"1.890.000₫", category:"kitchen", img:"https://images.unsplash.com/photo-1586201375761-83865001e5c9?w=900&q=80&auto=format&fit=crop", desc:"Nồi chiên không dầu dung tích 5L, dễ vệ sinh."},
  {id:2, title:"Bình đun siêu tốc 1.7L", price:"490.000₫", category:"kitchen", img:"https://images.unsplash.com/photo-1556911073-52527ac437f6?w=900&q=80&auto=format&fit=crop", desc:"Siêu tốc đun nhanh, vỏ inox."},
  {id:3, title:"Đèn bàn LED cảm ứng", price:"250.000₫", category:"living", img:"https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=900&q=80&auto=format&fit=crop", desc:"Tiết kiệm điện, điều chỉnh độ sáng."},
  {id:4, title:"Chăn lông 2m x 2.2m", price:"690.000₫", category:"bed", img:"https://images.unsplash.com/photo-1600180758895-8b1f6b73b1b8?w=900&q=80&auto=format&fit=crop", desc:"Mềm mại, giữ ấm."}
];

function renderProducts(list){
  const grid = document.getElementById('productGrid');
  grid.innerHTML = '';
  if(!list.length){ grid.innerHTML = '<div class="col-12 text-center text-muted">Không có sản phẩm.</div>'; return; }
  list.forEach(p => {
    const col = document.createElement('div');
    col.className = 'col-sm-6 col-md-4';
    col.innerHTML = `
      <div class="card product-card h-100">
        <img src="${p.img}" class="card-img-top" alt="${p.title}">
        <div class="card-body d-flex flex-column">
          <h5 class="card-title">${p.title}</h5>
          <p class="card-text text-muted small">${p.desc}</p>
          <div class="mt-auto d-flex justify-content-between align-items-center">
            <div class="card-price">${p.price}</div>
            <a href="product.html" class="btn btn-sm btn-outline-primary">Xem chi tiết</a>
          </div>
        </div>
      </div>`;
    grid.appendChild(col);
  });
}

document.addEventListener('DOMContentLoaded', ()=>{
  renderProducts(PRODUCTS);
  document.getElementById('year').textContent = new Date().getFullYear();
  const y2 = document.getElementById('year2'); if(y2) y2.textContent = new Date().getFullYear();
  const y3 = document.getElementById('year3'); if(y3) y3.textContent = new Date().getFullYear();

  // filter & search
  const cat = document.getElementById('catFilter');
  const search = document.getElementById('searchInput');
  function applyFilter(){ 
    const c = cat.value;
    const q = (search.value||'').trim().toLowerCase();
    let list = PRODUCTS.filter(p => c==='all' || p.category===c);
    if(q) list = list.filter(p => p.title.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q));
    renderProducts(list);
  }
  cat.addEventListener('change', applyFilter);
  search.addEventListener('input', applyFilter);

  // contact form demo behaviour
  const cform = document.getElementById('contactForm');
  if(cform){
    cform.addEventListener('submit', (e)=>{
      e.preventDefault();
      // basic validation
      const name = document.getElementById('name').value.trim();
      const phone = document.getElementById('phone').value.trim();
      const msg = document.getElementById('msg').value.trim();
      if(!name || !phone || !msg){ alert('Vui lòng điền đầy đủ thông tin'); return; }
      document.getElementById('formNotice').classList.remove('d-none');
      cform.reset();
      setTimeout(()=> document.getElementById('formNotice').classList.add('d-none'), 4000);
    });
  }

  // order button on product page
  const btnOrder = document.getElementById('btnOrder');
  if(btnOrder) btnOrder.addEventListener('click', ()=>{
    alert('Cảm ơn! Chúng tôi sẽ liên hệ bạn sớm để xác nhận đặt hàng.');
  });
});

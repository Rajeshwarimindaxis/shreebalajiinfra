/**
 * Shree Balaji Infra - Core Client-Side Logic & Interactivity
 */

(function () {
  // Available pages & products list for client-side search
  const sitePages = [
    { title: 'Home', url: 'index.html' },
    { title: 'About Us', url: 'about-us.html' },
    { title: 'All Products', url: 'products.html' },
    { title: 'Roofing Sheets', url: 'roofing-sheets.html' },
    { title: 'Curved Roofing Sheets', url: 'curved-roofing-sheets.html' },
    { title: 'Rib Profile Sheets', url: 'rib-profile-sheets.html' },
    { title: 'PUF Wall Panels', url: 'puf-wall-panels.html' },
    { title: 'Sandwich PUF Panel', url: 'sandwich-puf-panel.html' },
    { title: 'Roofing Accessories', url: 'roofing-accessories.html' },
    { title: 'Color Coated Coils', url: 'color-coated-coils.html' },
    { title: 'PPGI Hi Rib Profile Roofing Sheet', url: 'ppgi-hi-rib-profile-roofing-sheet.html' },
    { title: 'Color Coated Metal Roofing Sheet', url: 'color-coated-metal-roofing-sheet.html' },
    { title: 'Blue Color Coated Roofing Sheet', url: 'blue-color-coated-roofing-sheet.html' },
    { title: 'Yellow Color Coated Roofing Sheet', url: 'yellow-color-coated-roofing-sheet.html' },
    { title: 'White Color Coated Roofing Sheet', url: 'white-color-coated-roofing-sheet.html' },
    { title: 'Green Color Coated Roofing Sheet', url: 'green-color-coated-roofing-sheet.html' },
    { title: 'Black Color Coated Roofing Sheet', url: 'black-color-coated-roofing-sheet.html' },
    { title: 'Red Color Coated Curved Roofing Sheet', url: 'red-color-coated-curved-roofing-sheet.html' },
    { title: 'Blue Crimp Curved Sheet', url: 'blue-crimp-curved-sheet.html' },
    { title: 'Galvanized Crimp Curved Sheet', url: 'galvanized-crimp-curved-sheet.html' },
    { title: 'Crimp Curved Roofing Sheets', url: 'crimp-curved-roofing-sheets.html' },
    { title: 'Yellow Color Coated Curved Roofing Sheet', url: 'yellow-color-coated-curved-roofing-sheet.html' },
    { title: 'Green Color Coated Curved Roofing Sheet', url: 'green-color-coated-curved-roofing-sheet.html' },
    { title: 'Blue Color Coated Curved Roofing Sheet', url: 'blue-color-coated-curved-roofing-sheet.html' },
    { title: 'Galvalume Color Coated Curved Roofing Sheet', url: 'galvalume-color-coated-curved-roofing-sheet.html' },
    { title: 'Pre-Painted Rib Profile Roofing Sheet', url: 'pre-painted-rib-profile-roofing-sheet.html' },
    { title: 'Grey Galvalume Rib Profile Roofing Sheet', url: 'grey-galvalume-rib-profile-roofing-sheet.html' },
    { title: 'Galvalume Rib Profile Roofing Sheet', url: 'galvalume-rib-profile-roofing-sheet.html' },
    { title: 'Color Coated Hi Rib Profile Sheet', url: 'color-coated-hi-rib-profile-sheet.html' },
    { title: 'Color Coated High Rib Profile Sheet', url: 'color-coated-high-rib-profile-sheet.html' },
    { title: 'Color Coated Galvanized Roofing Sheet', url: 'color-coated-galvanized-roofing-sheet.html' },
    { title: 'Color Coated Metal Crimping Sheet', url: 'color-coated-metal-crimping-sheet.html' },
    { title: 'Barge Board Flashing', url: 'barge-board-flashing.html' },
    { title: 'Corner Flashing', url: 'corner-flashing.html' },
    { title: 'Color Coated Hood Covers For Roofing Sheet', url: 'color-coated-hood-covers-for-roofing-sheet.html' },
    { title: 'C & Z Purlins', url: 'c-z-purlins.html' },
    { title: 'End Eave Gutter', url: 'end-eave-gutter.html' },
    { title: 'Profile Box Gutter', url: 'profile-box-gutter.html' },
    { title: 'Metal Louvers', url: 'metal-louvers.html' },
    { title: 'Turbo Ventilator', url: 'turbo-ventilator.html' },
    { title: 'Aluminium Automatic Industrial Ridge Ventilator', url: 'aluminium-automatic-industrial-ridge-ventilator.html' },
    { title: 'HP Self Drilling Screw', url: 'hp-self-drilling-screw.html' },
    { title: 'Quality Certificates', url: 'certificates.html' },
    { title: 'Customer Testimonials', url: 'testimonials.html' },
    { title: 'Contact Us', url: 'contact-us.html' },
    { title: 'Sitemap', url: 'sitemap.html' }
  ];

  // DOM Ready
  document.addEventListener('DOMContentLoaded', function () {
    initToast();
    initCustomModal();
    initSearchHandler();
    initMobileNav();
    initFormInterceptors();
    initAlternatingFloatingButtons();
  });

  // Toast Notification
  function showToast(message, duration = 4000) {
    let toast = document.getElementById('site-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'site-toast';
      toast.className = 'site-toast';
      document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.style.display = 'block';
    setTimeout(() => {
      toast.style.display = 'none';
    }, duration);
  }

  function initToast() {
    if (!document.getElementById('site-toast')) {
      const toast = document.createElement('div');
      toast.id = 'site-toast';
      toast.className = 'site-toast';
      document.body.appendChild(toast);
    }
  }

  // Custom Enquiry Modal
  let modalOverlay, modalSubjectInput, modalProdDisplay;

  function initCustomModal() {
    // Build Modal DOM if not present
    if (!document.getElementById('customEnquiryModal')) {
      const modal = document.createElement('div');
      modal.id = 'customEnquiryModal';
      modal.className = 'custom-modal-overlay';
      modal.innerHTML = `
        <div class="custom-modal-box">
          <div class="custom-modal-header">
            <h3>Request a Quote / Send Enquiry</h3>
            <button type="button" class="custom-modal-close" id="customModalCloseBtn">&times;</button>
          </div>
          <div class="custom-modal-body">
            <form id="customModalForm" onsubmit="return false;">
              <div style="margin-bottom: 12px;">
                <label style="display:block;font-size:13px;font-weight:600;margin-bottom:4px;color:#333;">Product / Requirement:</label>
                <input type="text" id="modalSubject" style="width:100%;padding:8px 10px;border:1px solid #ccc;border-radius:4px;font-size:14px;box-sizing:border-box;" required>
              </div>
              <div style="display:flex;gap:10px;margin-bottom:12px;">
                <div style="flex:1;">
                  <label style="display:block;font-size:13px;font-weight:600;margin-bottom:4px;color:#333;">Quantity:</label>
                  <input type="number" id="modalQty" min="1" placeholder="e.g. 50" style="width:100%;padding:8px 10px;border:1px solid #ccc;border-radius:4px;font-size:14px;box-sizing:border-box;">
                </div>
                <div style="width:110px;">
                  <label style="display:block;font-size:13px;font-weight:600;margin-bottom:4px;color:#333;">Unit:</label>
                  <select id="modalUnit" style="width:100%;padding:8px;border:1px solid #ccc;border-radius:4px;font-size:14px;box-sizing:border-box;">
                    <option value="Meter">Meter</option>
                    <option value="Square Feet">Sq Feet</option>
                    <option value="Piece">Piece</option>
                    <option value="Kilogram">Kg</option>
                    <option value="Ton">Ton</option>
                  </select>
                </div>
              </div>
              <div style="margin-bottom: 12px;">
                <label style="display:block;font-size:13px;font-weight:600;margin-bottom:4px;color:#333;">Your Name:</label>
                <input type="text" id="modalName" placeholder="Enter Full Name" style="width:100%;padding:8px 10px;border:1px solid #ccc;border-radius:4px;font-size:14px;box-sizing:border-box;" required>
              </div>
              <div style="margin-bottom: 12px;">
                <label style="display:block;font-size:13px;font-weight:600;margin-bottom:4px;color:#333;">Mobile Number:</label>
                <input type="tel" id="modalPhone" placeholder="10-digit mobile number" style="width:100%;padding:8px 10px;border:1px solid #ccc;border-radius:4px;font-size:14px;box-sizing:border-box;" pattern="[0-9]{10}" required>
              </div>
              <div style="margin-bottom: 12px;">
                <label style="display:block;font-size:13px;font-weight:600;margin-bottom:4px;color:#333;">Email Address:</label>
                <input type="email" id="modalEmail" placeholder="yourname@domain.com" style="width:100%;padding:8px 10px;border:1px solid #ccc;border-radius:4px;font-size:14px;box-sizing:border-box;" required>
              </div>
              <div style="margin-bottom: 16px;">
                <label style="display:block;font-size:13px;font-weight:600;margin-bottom:4px;color:#333;">Requirement / Message:</label>
                <textarea id="modalMsg" rows="3" placeholder="Please mention specifications, delivery location, or questions..." style="width:100%;padding:8px 10px;border:1px solid #ccc;border-radius:4px;font-size:14px;box-sizing:border-box;"></textarea>
              </div>
              <div id="modalSuccessBox" style="display:none;background:#e8f5e9;color:#2e7d32;padding:12px;border-radius:6px;margin-bottom:12px;font-size:14px;text-align:center;">
                <strong>Thank you!</strong> Your enquiry has been received successfully. Our sales team will get back to you shortly.
              </div>
              <button type="submit" id="modalSubmitBtn" style="width:100%;background:#e62319;color:#fff;border:none;padding:12px;font-size:15px;font-weight:bold;border-radius:6px;cursor:pointer;transition:background 0.2s;">
                Submit Enquiry
              </button>
            </form>
          </div>
        </div>
      `;
      document.body.appendChild(modal);

      modalOverlay = modal;
      modalSubjectInput = document.getElementById('modalSubject');
      const closeBtn = document.getElementById('customModalCloseBtn');
      closeBtn.addEventListener('click', closeModal);

      modalOverlay.addEventListener('click', function (e) {
        if (e.target === modalOverlay) closeModal();
      });

      const form = document.getElementById('customModalForm');
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        const name = document.getElementById('modalName').value.trim();
        const phone = document.getElementById('modalPhone').value.trim();
        const subject = modalSubjectInput.value.trim();

        if (!name || !phone) {
          alert('Please enter your name and phone number.');
          return;
        }

        const successBox = document.getElementById('modalSuccessBox');
        const submitBtn = document.getElementById('modalSubmitBtn');
        successBox.style.display = 'block';
        submitBtn.style.display = 'none';

        setTimeout(() => {
          showToast('Enquiry for ' + subject + ' sent successfully!');
          closeModal();
          form.reset();
          successBox.style.display = 'none';
          submitBtn.style.display = 'block';
        }, 2200);
      });
    }

    // Attach listeners to all Enquiry links & buttons across the page
    document.addEventListener('click', function (e) {
      const target = e.target.closest('a, button');
      if (!target) return;

      const href = target.getAttribute('href') || '';
      const text = (target.textContent || '').trim().toLowerCase();

      if (
        href.includes('enquiry-form') ||
        href === '#sendEmail' ||
        target.classList.contains('sendEmail') ||
        text === 'enquiry now' ||
        text === 'send enquiry' ||
        text === 'request a quote' ||
        text.includes('get best price')
      ) {
        e.preventDefault();

        // Detect product title from nearest container or title attribute
        let productTitle = 'Roofing Sheets & Accessories';
        const card = target.closest('li, .product_item, .p-list, .prd-item, .box, tr');
        if (card) {
          const titleEl = card.querySelector('h2, h3, h4, .title, a[title], .p-head');
          if (titleEl && titleEl.textContent) {
            productTitle = titleEl.textContent.trim();
          }
        } else if (target.getAttribute('data-product')) {
          productTitle = target.getAttribute('data-product');
        } else if (document.querySelector('h1')) {
          productTitle = document.querySelector('h1').textContent.trim();
        }

        openModal(productTitle);
      }
    });
  }

  function openModal(productTitle) {
    if (!modalOverlay) initCustomModal();
    if (modalSubjectInput) modalSubjectInput.value = productTitle || 'Industrial Roofing Material';
    modalOverlay.classList.add('active');
  }

  function closeModal() {
    if (modalOverlay) modalOverlay.classList.remove('active');
  }

  // Client-Side Search
  function initSearchHandler() {
    const searchForms = document.querySelectorAll('form[name="searchform"], .search-form, #searchform');
    searchForms.forEach(form => {
      const input = form.querySelector('input[name="kword"], input[type="text"]');
      if (!input) return;

      // Create suggestions container
      const dropdown = document.createElement('div');
      dropdown.className = 'search-results-dropdown';
      input.parentNode.style.position = 'relative';
      input.parentNode.appendChild(dropdown);

      input.addEventListener('input', function () {
        const query = this.value.trim().toLowerCase();
        if (query.length < 2) {
          dropdown.style.display = 'none';
          dropdown.innerHTML = '';
          return;
        }

        const matches = sitePages.filter(p => p.title.toLowerCase().includes(query)).slice(0, 8);
        if (matches.length > 0) {
          dropdown.innerHTML = matches.map(m => `<a href="${m.url}">${m.title}</a>`).join('');
          dropdown.style.display = 'block';
        } else {
          dropdown.innerHTML = `<div style="padding:10px 14px;color:#888;font-size:13px;">No matching products found.</div>`;
          dropdown.style.display = 'block';
        }
      });

      document.addEventListener('click', function (e) {
        if (!form.contains(e.target)) {
          dropdown.style.display = 'none';
        }
      });

      form.addEventListener('submit', function (e) {
        e.preventDefault();
        const query = input.value.trim().toLowerCase();
        if (!query) return;

        const bestMatch = sitePages.find(p => p.title.toLowerCase().includes(query));
        if (bestMatch) {
          window.location.href = bestMatch.url;
        } else {
          window.location.href = 'products.html';
        }
      });
    });
  }

  // Mobile Navigation Hamburger
  function initMobileNav() {
    const mobileBtn = document.getElementById('ddsmoothmenu-mobiletoggle') || document.querySelector('.animateddrawer');
    const menu = document.getElementById('smoothmenu1') || document.querySelector('.ddsmoothmenu');

    if (mobileBtn && menu) {
      mobileBtn.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        menu.classList.toggle('mobile-open');
        mobileBtn.classList.toggle('active');
      });
    }
  }

  // Intercept forms (Footer enquiry, quick inquiry, contact us)
  function initFormInterceptors() {
    const allForms = document.querySelectorAll('form');
    allForms.forEach(form => {
      if (form.id === 'customModalForm') return;
      const action = form.getAttribute('action') || '';
      if (action.includes('catalog.exportersindia.com') || form.name === 'footer_form' || form.name === 'quick_form' || form.name === 'email_form') {
        form.addEventListener('submit', function (e) {
          e.preventDefault();
          const phoneInput = form.querySelector('input[name*="mobile"], input[name*="phone"], input[type="tel"]');
          const emailInput = form.querySelector('input[name*="email"], input[type="email"]');

          const successDiv = form.querySelector('[id*="success"]') || form.querySelector('.success');
          if (successDiv) {
            successDiv.style.display = 'block';
          }
          showToast('Thank you! Your enquiry has been submitted successfully.');
          form.reset();
        });
      }
    });
  }



  // Alternating Spread/Unspread Animation for Call & WhatsApp Floating Buttons (Disabled in favor of rectangle orange dock)
  function initAlternatingFloatingButtons() {
    return;
  }

  // Expose global helpers
  window.shreeBalaji = {
    openEnquiry: openModal,
    closeEnquiry: closeModal,
    showToast: showToast
  };

  // Sticky Navbar Engine - Always visible throughout the whole page
  (function initStickyNavbar() {
    function setupSticky() {
      var navbar = document.querySelector('.sb-navbar-bar');
      if (!navbar) return;

      var spacer = document.querySelector('.sb-navbar-spacer');
      if (!spacer) {
        spacer = document.createElement('div');
        spacer.className = 'sb-navbar-spacer';
        navbar.parentNode.insertBefore(spacer, navbar.nextSibling);
      }

      var navTop = navbar.offsetTop;

      function onScroll() {
        var scrollY = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollY > (navTop > 0 ? navTop : 40)) {
          if (!navbar.classList.contains('sb-navbar-sticky')) {
            navbar.classList.add('sb-navbar-sticky');
            spacer.style.height = navbar.offsetHeight + 'px';
            spacer.classList.add('is-active');
          }
        } else {
          if (navbar.classList.contains('sb-navbar-sticky')) {
            navbar.classList.remove('sb-navbar-sticky');
            spacer.classList.remove('is-active');
          }
        }
      }

      window.addEventListener('scroll', onScroll, { passive: true });
      window.addEventListener('resize', function () {
        if (!navbar.classList.contains('sb-navbar-sticky')) {
          navTop = navbar.offsetTop;
        }
      });
      onScroll();
    }

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', setupSticky);
    } else {
      setupSticky();
    }
  })();


  // Global Brochure Options Modal Engine (View Online vs Download PDF)
  (function initBrochureModal() {
    function buildModalDOM() {
      if (document.getElementById('sbBrochureModal')) return;

      var modal = document.createElement('div');
      modal.id = 'sbBrochureModal';
      modal.className = 'sb-brochure-modal-overlay';
      modal.setAttribute('aria-hidden', 'true');
      modal.innerHTML = `
        <div class="sb-brochure-modal-dialog">
          <div class="sb-brochure-modal-header">
            <div class="sb-brochure-header-left">
              <div class="sb-brochure-pdf-icon-wrap"><i class="fa fa-file-pdf-o"></i></div>
              <div>
                <h3 class="sb-brochure-header-title">Shree Balaji Infra Brochure</h3>
                <p class="sb-brochure-header-sub">Product Catalog &amp; Technical Specifications</p>
              </div>
            </div>
            <button type="button" class="sb-brochure-modal-close" id="sbBrochureCloseBtn" aria-label="Close modal">&times;</button>
          </div>

          <div class="sb-brochure-modal-body">
            <p class="sb-brochure-lead-text">
              Please choose how you would like to access our complete industrial steel &amp; roofing product brochure:
            </p>

            <div class="sb-brochure-options-grid">
              <!-- Option 1: View Online (Website / Browser) -->
              <div class="sb-brochure-option-card view-card">
                <div>
                  <div class="sb-brochure-card-icon view-icon"><i class="fa fa-eye"></i></div>
                  <h4 class="sb-brochure-card-h4">View PDF Online</h4>
                  <p class="sb-brochure-card-p">Directly open and view the complete catalog on our website in a new browser tab.</p>
                </div>
                <a href="assets/docs/brochure-infra-1.pdf" target="_blank" rel="noopener" class="sb-brochure-action-btn btn-view" id="sbBrochureViewBtn">
                  <i class="fa fa-external-link"></i> View PDF Online
                </a>
              </div>

              <!-- Option 2: Download PDF -->
              <div class="sb-brochure-option-card download-card">
                <div>
                  <div class="sb-brochure-card-icon download-icon"><i class="fa fa-download"></i></div>
                  <h4 class="sb-brochure-card-h4">Download PDF</h4>
                  <p class="sb-brochure-card-p">Save the high-resolution brochure directly to your device for offline reading (PDF, ~2.4 MB).</p>
                </div>
                <a href="assets/docs/brochure-infra-1.pdf" download="Shree_Balaji_Infra_Brochure.pdf" class="sb-brochure-action-btn btn-download" id="sbBrochureDownloadBtn">
                  <i class="fa fa-arrow-circle-o-down"></i> Download PDF
                </a>
              </div>
            </div>

            <!-- In-Page Preview Accordion -->
            <div class="sb-brochure-preview-section">
              <button type="button" class="sb-brochure-preview-toggle-btn" id="sbBrochureTogglePreview">
                <i class="fa fa-search-plus"></i> <span id="sbPreviewToggleText">Preview PDF inside this page</span>
              </button>
              <div class="sb-brochure-iframe-wrap" id="sbBrochureIframeBox" style="display:none;">
                <iframe src="assets/docs/brochure-infra-1.pdf#toolbar=1" class="sb-brochure-iframe" title="PDF In-Page Preview" loading="lazy"></iframe>
              </div>
            </div>
          </div>
        </div>
      `;

      document.body.appendChild(modal);

      // Event Listeners for Modal
      var closeBtn = document.getElementById('sbBrochureCloseBtn');
      if (closeBtn) {
        closeBtn.addEventListener('click', closeBrochureModal);
      }

      modal.addEventListener('click', function (e) {
        if (e.target === modal) closeBrochureModal();
      });

      var togglePreviewBtn = document.getElementById('sbBrochureTogglePreview');
      var iframeBox = document.getElementById('sbBrochureIframeBox');
      var previewText = document.getElementById('sbPreviewToggleText');
      if (togglePreviewBtn && iframeBox) {
        togglePreviewBtn.addEventListener('click', function () {
          var isHidden = iframeBox.style.display === 'none';
          iframeBox.style.display = isHidden ? 'block' : 'none';
          previewText.textContent = isHidden ? 'Hide In-Page Preview' : 'Preview PDF inside this page';
        });
      }
    }

    function openBrochureModal() {
      buildModalDOM();
      var modal = document.getElementById('sbBrochureModal');
      if (modal) {
        modal.classList.add('is-open');
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
      }
    }

    function closeBrochureModal() {
      var modal = document.getElementById('sbBrochureModal');
      if (modal) {
        modal.classList.remove('is-open');
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
      }
    }

    // Expose helpers globally
    window.shreeBalajiBrochure = {
      open: openBrochureModal,
      close: closeBrochureModal
    };

    // Global Keydown handler for Escape
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeBrochureModal();
    });

    // Intercept clicks on ALL brochure triggers
    function bindTriggers() {
      document.addEventListener('click', function (e) {
        var target = e.target.closest('a');
        if (!target) return;

        var href = target.getAttribute('href') || '';
        var text = (target.textContent || '').trim().toLowerCase();
        var isBrochure = href.indexOf('brochure-infra') !== -1 || 
                         target.classList.contains('sb-brochure-btn') ||
                         target.hasAttribute('data-brochure-modal') ||
                         (text === 'brochure' || text === 'broucher');

        // Do not intercept links inside the modal itself!
        if (target.closest('#sbBrochureModal')) return;

        if (isBrochure) {
          e.preventDefault();
          openBrochureModal();
        }
      });
    }

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', bindTriggers);
    } else {
      bindTriggers();
    }
  })();

  // ========================================================
  // Floating Action Dock Engine & Universal Scroll-To-Top
  // Small Rectangle Orange Box with Call, WhatsApp, Email & Top Scroll
  // Top scroll button hidden when at page top; appears only after scroll
  // ========================================================
  (function initFloatingDockAndScroll() {
    function updateScrollTopVisibility() {
      var scrollY = window.pageYOffset || document.documentElement.scrollTop || 0;
      var topBtns = document.querySelectorAll('.sb-dock-top-btn, #sbScrollTopBtn');
      var shouldShow = scrollY > 250;
      for (var i = 0; i < topBtns.length; i++) {
        if (shouldShow) {
          topBtns[i].classList.add('is-visible');
        } else {
          topBtns[i].classList.remove('is-visible');
        }
      }
    }

    function setupDock() {
      // Ensure dock exists
      var dock = document.querySelector('.sb-floating-dock');
      if (!dock) {
        var oldDock = document.querySelector('.floating-contact-wrap');
        if (oldDock) oldDock.remove();
        var oldTop = document.getElementById('sbScrollTopBtn');
        if (oldTop && !oldTop.closest('.sb-floating-dock')) oldTop.remove();

        dock = document.createElement('div');
        dock.className = 'sb-floating-dock pf';
        dock.setAttribute('role', 'toolbar');
        dock.setAttribute('aria-label', 'Quick Actions');
        dock.innerHTML = 
          '<a href="tel:+919921693666" class="sb-dock-btn" id="callFloatingBtn" title="Call Us" aria-label="Call Shree Balaji Infra">' +
            '<i class="fa fa-phone"></i>' +
            '<span class="sb-dock-tooltip">Call Us</span>' +
          '</a>' +
          '<a href="https://api.whatsapp.com/send?phone=919511113666&text=Hello%21+I+found+your+website+and+am+interested+in+your+products."' +
            ' target="_blank" rel="noopener" class="sb-dock-btn" id="waFloatingBtn" title="WhatsApp Us" aria-label="Chat on WhatsApp">' +
            '<i class="fa fa-whatsapp"></i>' +
            '<span class="sb-dock-tooltip">WhatsApp</span>' +
          '</a>' +
          '<a href="mailto:sales@sbe3666.com" class="sb-dock-btn" id="emailFloatingBtn" title="Email Us" aria-label="Send Email">' +
            '<i class="fa fa-envelope"></i>' +
            '<span class="sb-dock-tooltip">Email Us</span>' +
          '</a>' +
          '<button type="button" class="sb-dock-btn sb-dock-top-btn" id="sbScrollTopBtn" title="Scroll to Top" aria-label="Scroll to top">' +
            '<i class="fa fa-angle-up"></i>' +
            '<span class="sb-dock-tooltip">Top</span>' +
          '</button>';
        document.body.appendChild(dock);
      }
      updateScrollTopVisibility();
    }

    function setupScrollTopListener() {
      window.addEventListener('scroll', updateScrollTopVisibility, { passive: true });

      document.addEventListener('click', function (e) {
        var btn = e.target.closest('#sbScrollTopBtn') || e.target.closest('.sb-dock-top-btn') || e.target.closest('.toTop');
        if (btn) {
          e.preventDefault();
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
          // Hide button quickly as page starts scrolling to top
          setTimeout(updateScrollTopVisibility, 200);
        }
      });
    }

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', function () {
        setupDock();
        setupScrollTopListener();
      });
    } else {
      setupDock();
      setupScrollTopListener();
    }
  })();

})();


  /* ==========================================================================
     UNIFIED MOBILE NAVIGATION & DROPDOWN CONTROLLER
     ========================================================================== */
  (function initGlobalMobileNav() {
    function setupMobileNav() {
      var toggleBtn = document.getElementById('sbNavToggle');
      var menu = document.getElementById('sbNavMenu');
      if (toggleBtn && menu) {
        toggleBtn.addEventListener('click', function (e) {
          e.preventDefault();
          e.stopPropagation();
          menu.classList.toggle('is-open');
          menu.classList.toggle('sb-open');
        });
      }

      // Close menu when tapping outside on mobile
      document.addEventListener('click', function (e) {
        if (menu && (menu.classList.contains('is-open') || menu.classList.contains('sb-open'))) {
          if (!menu.contains(e.target) && (!toggleBtn || !toggleBtn.contains(e.target))) {
            menu.classList.remove('is-open');
            menu.classList.remove('sb-open');
          }
        }
      });

      // Expandable mega dropdown on mobile
      var dropdownItems = document.querySelectorAll('.sb-has-dropdown > a');
      dropdownItems.forEach(function (dropLink) {
        dropLink.addEventListener('click', function (e) {
          if (window.innerWidth <= 991) {
            e.preventDefault();
            var parent = this.closest('.sb-has-dropdown');
            if (parent) {
              parent.classList.toggle('sb-expanded');
            }
          }
        });
      });
    }

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', setupMobileNav);
    } else {
      setupMobileNav();
    }
  })();


  /* ==========================================================================
     CONTACT & ENQUIRY FORM VALIDATION ENGINE (EMAIL & MOBILE NO)
     - Live keystroke sanitization & restriction (digits only for phone)
     - Strict RFC email validation with informative visual feedback
     - 10-digit Indian Mobile / International mobile validation
     - Clear inline error messages and visual highlighting
     - Smooth scrolling to first invalid input on submission
     ========================================================================== */
  (function initContactFormValidation() {
    function setupFormValidation() {
      var forms = document.querySelectorAll('form[name="static_form"], form[name="products_form"], .contact_full_form form, form.enq-frm');

      forms.forEach(function (form) {
        var emailInput = form.querySelector('input[name="dynFrm_email_id"], #detail_email_id, input[type="email"]');
        var phoneInput = form.querySelector('input[name="dynFrm_phone"], #detail_phone, input.mobile-number, input[type="tel"]');
        var countrySelect = form.querySelector('select[name="dynFrm_country"], #dynFrm_country');

        function getOrCreateErrorSpan(input, defaultClass) {
          if (!input) return null;
          var parent = input.closest('.mb17px') || input.parentElement;
          var span = parent.querySelector('.sb-form-error, span.red');
          if (!span) {
            span = document.createElement('span');
            span.className = defaultClass || 'sb-form-error';
            parent.appendChild(span);
          }
          return span;
        }

        function setFieldError(input, message) {
          if (!input) return;
          input.classList.add('sb-input-error');
          input.classList.remove('sb-input-success');
          var errSpan = getOrCreateErrorSpan(input, 'sb-form-error');
          if (errSpan) {
            errSpan.className = 'sb-form-error red xsmall';
            errSpan.textContent = message;
            errSpan.style.display = 'block';
          }
        }

        function clearFieldError(input) {
          if (!input) return;
          input.classList.remove('sb-input-error');
          input.classList.add('sb-input-success');
          var errSpan = getOrCreateErrorSpan(input, 'sb-form-error');
          if (errSpan) {
            errSpan.textContent = '';
            errSpan.style.display = 'none';
          }
        }

        function validateEmail(showError) {
          if (!emailInput) return true;
          var val = emailInput.value.trim();
          var emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*\.[a-zA-Z]{2,}$/;

          if (!val) {
            if (showError) setFieldError(emailInput, 'Please enter your email address.');
            return false;
          }
          if (!emailRegex.test(val)) {
            if (showError) setFieldError(emailInput, 'Please enter a valid email address (e.g. name@example.com).');
            return false;
          }
          clearFieldError(emailInput);
          return true;
        }

        function validatePhone(showError) {
          if (!phoneInput) return true;
          var val = phoneInput.value.trim();
          var isIndia = true;
          if (countrySelect && countrySelect.value) {
            isIndia = countrySelect.value.indexOf('91') !== -1;
          }

          if (!val) {
            if (showError) setFieldError(phoneInput, 'Please enter your mobile number.');
            return false;
          }
          if (!/^\d+$/.test(val)) {
            if (showError) setFieldError(phoneInput, 'Mobile number must contain digits only.');
            return false;
          }
          if (isIndia) {
            if (val.length !== 10) {
              if (showError) setFieldError(phoneInput, 'Please enter exactly 10 digits for Indian mobile number.');
              return false;
            }
            if (!/^[6-9]/.test(val)) {
              if (showError) setFieldError(phoneInput, 'Indian mobile number must start with 6, 7, 8, or 9.');
              return false;
            }
          } else {
            if (val.length < 6 || val.length > 15) {
              if (showError) setFieldError(phoneInput, 'Please enter 6 to 15 digits for international number.');
              return false;
            }
          }
          clearFieldError(phoneInput);
          return true;
        }

        // Live Keystroke Filter for Mobile: only allow digits (max 10 for India)
        if (phoneInput) {
          phoneInput.setAttribute('inputmode', 'numeric');
          phoneInput.setAttribute('autocomplete', 'tel');
          phoneInput.addEventListener('input', function () {
            var isIndia = true;
            if (countrySelect && countrySelect.value) {
              isIndia = countrySelect.value.indexOf('91') !== -1;
            }
            var clean = this.value.replace(/\D/g, '');
            if (isIndia && clean.length > 10) {
              clean = clean.substring(0, 10);
            }
            this.value = clean;
            if (clean.length === 10 && isIndia) {
              validatePhone(false);
            } else if (this.classList.contains('sb-input-error')) {
              validatePhone(true);
            }
          });

          phoneInput.addEventListener('blur', function () {
            validatePhone(true);
          });
        }

        // Live Email Validation on blur and typing
        if (emailInput) {
          emailInput.setAttribute('autocomplete', 'email');
          emailInput.addEventListener('blur', function () {
            validateEmail(true);
          });
          emailInput.addEventListener('input', function () {
            if (this.classList.contains('sb-input-error')) {
              validateEmail(false);
            }
          });
        }

        // Intercept Form Submission in capture phase so invalid data is blocked
        form.addEventListener('submit', function (e) {
          var isEmailOk = validateEmail(true);
          var isPhoneOk = validatePhone(true);

          if (!isEmailOk || !isPhoneOk) {
            e.preventDefault();
            e.stopImmediatePropagation();
            var target = !isEmailOk ? emailInput : phoneInput;
            if (target) {
              target.focus();
              target.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
            return false;
          }
        }, true);
      });
    }

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', setupFormValidation);
    } else {
      setupFormValidation();
    }
  })();

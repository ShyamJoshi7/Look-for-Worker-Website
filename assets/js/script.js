const navLinks=document.querySelector('.nav-links');

function showMenu(){
    navLinks.style.left='0%';
}

function hideMenu(){
    navLinks.style.left='100%'
}

function addclass() {
    navLinks.classList.toggle("active");
  }

  $(document).ready(function () {
    $(".signin-btn").click(function (event) {
      showModal();
      event.stopPropagation();
    });
    $(".close-btn").click(function () {
      hideModal();
    });

    // Do nothing when clicking on the modal content
    $(".login-container").click(function (event) {
      event.stopPropagation();
    });
  });

  function showModal() {
    $("#overlay").fadeIn("slow");
    (function fun() {
      $(".login-container").css({ top: "20%" });
      $(".body").css({ overflow: "hidden" });
    })();
  }

  function hideModal() {
    $("#overlay").fadeOut("slow");
    (function fun2() {
      $(".login-container").css({ top: "-100%" });
      $(".body").css({ overflow: "auto" });
    })();
  }

  $(document).on("click", function () {
    hideModal();
  });



  // register page js
  $("#create-new-account").on("click", function () {
    $(".new-account-container")
      .addClass("active")
      .siblings()
      .removeClass("active");
  });
  $(".close-btn").on("click", function () {
    $(".new-account-container").removeClass("active");
  });
  $(".new-account-container").click(function (event) {
    event.stopPropagation();
  });


//registration dropdown-list
const subcategories = {
  Plumbing: ['Pipe Installation', 'Leak Repair', 'Bathroom Fitting', 'Drain Cleaning', 'Water Heater Installation'],
  'Electrical Work': ['Wiring Installation', 'Appliance Repair', 'Lighting Installation', 'Circuit Breaker Repair', 'Electrical Safety Inspection'],
  Carpentry: ['Furniture Assembly', 'Cabinet Making', 'Wood Polishing', 'Flooring Installation', 'Door and Window Repair'],
  Painting: ['Interior Painting', 'Exterior Painting', 'Wallpaper Installation', 'Paint Removal', 'Decorative Painting'],
  Masonry: ['Bricklaying', 'Concrete Work', 'Stone Setting', 'Tiling', 'Paving'],
  HVAC: ['AC Installation', 'Furnace Repair', 'Duct Cleaning', 'Thermostat Installation', 'Ventilation System Repair'],
  Landscaping: ['Lawn Mowing', 'Garden Maintenance', 'Tree Trimming', 'Irrigation System Installation', 'Landscaping Design'],
  'Cleaning Services': ['Residential Cleaning', 'Commercial Cleaning', 'Carpet Cleaning', 'Window Cleaning', 'Post-Construction Cleaning'],
  Roofing: ['Roof Installation', 'Roof Repair', 'Gutter Cleaning', 'Shingle Replacement', 'Roof Inspection'],
  'Pest Control': ['Termite Treatment', 'Rodent Control', 'Bed Bug Treatment', 'Ant and Insect Control', 'Wildlife Removal'],
  'General Handyman': ['Minor Home Repairs', 'Furniture Assembly', 'Picture Hanging', 'Door and Lock Repair', 'Small Painting Jobs'],
  'Appliance Repair': ['Refrigerator Repair', 'Washing Machine Repair', 'Oven Repair', 'Dishwasher Repair', 'Small Appliance Repair']
};

function toggleDropdown(type) {
  const dropdownMenu = document.getElementById(`${type}-menu`);
  dropdownMenu.classList.toggle('show');
}

function selectCategory(category) {
  document.getElementById('selected-category').innerText = category;
  document.querySelector('.dropdown-menu.show').classList.remove('show');
  populateSubcategories(category);
  document.getElementById('selected-subcategory').innerText = ''; 
}

function populateSubcategories(category) {
  const subcategoryMenu = document.getElementById('subcategory-menu');
  subcategoryMenu.innerHTML = '';

  if (subcategories[category]) {
      subcategories[category].forEach(subcat => {
          const li = document.createElement('li');
          li.textContent = subcat;
          li.onclick = () => selectSubcategory(subcat);
          subcategoryMenu.appendChild(li);
      });
  } else {
      const li = document.createElement('li');
      li.textContent = 'No subcategories available';
      subcategoryMenu.appendChild(li);
  }
}

function selectSubcategory(subcategory) {
  document.getElementById('selected-subcategory').innerText = subcategory;
  document.querySelector('.dropdown-menu.show').classList.remove('show');
}

function selectHours(hours) {
  document.getElementById('selected-desired-period').innerText = hours + ' hours';
  document.querySelector('.dropdown-menu.show').classList.remove('show');
}

// Populate the hours dropdown with options from 1 to 24
function populateHoursDropdown() {
  const hoursMenu = document.getElementById('hours-menu');
  for (let i = 1; i <= 24; i++) {
      const li = document.createElement('li');
      li.textContent = i + (i === 1 ? ' hour' : ' hours');
      li.onclick = () => selectHours(i);
      hoursMenu.appendChild(li);
  }
}

// Populate the hours dropdown on page load
window.onload = function() {
  populateHoursDropdown();
}

function selectPay(pay) {
  document.getElementById('selected-pay').innerText = `₹${pay}`;
  document.querySelector('.dropdown-menu.show').classList.remove('show');
}

function populatePayDropdown() {
  const payMenu = document.getElementById('pay-menu');
  for (let i = 100; i <= 2000; i += 100) {
      const li = document.createElement('li');
      li.textContent =`₹${i}`;
      li.onclick = () => selectPay(i);
      payMenu.appendChild(li);
  }
}

window.onload = function() {
  populatePayDropdown();
}

// List of major Indian cities
const cities = [
  "Mumbai", "Delhi", "Bangalore", "Hyderabad", "Ahmedabad", "Chennai", 
  "Kolkata", "Pune", "Jaipur", "Lucknow", "Kanpur", 
  "Nagpur", "Visakhapatnam", "Indore", "Thane", "Bhopal", "Patna", 
  "Vadodara", "Ghaziabad", "Ludhiana", "Agra", "Nashik", "Faridabad", 
  "Meerut", "Rajkot", "Kalyan-Dombivli","Vasai-Virar", "Varanasi", "Srinagar", 
  "Aurangabad", "Dhanbad", "Amritsar", "Navi Mumbai", "Allahabad", "Howrah", 
  "Ranchi", "Gwalior", "Jabalpur", "Coimbatore", "Vijayawada", "Jodhpur", 
  "Madurai", "Raipur", "Kota", "Guwahati", "Chandigarh", "Solapur", 
  "Hubli-Dharwad", "Bareilly", "Moradabad", "Mysore", "Gurgaon", "Aligarh", 
  "Jalandhar", "Tiruchirappalli", "Bhubaneswar", "Salem", "Mira-Bhayandar", 
  "Thiruvananthapuram", "Bhiwandi", "Saharanpur", "Guntur", "Amravati", 
  "Bikaner", "Noida", "Jamshedpur", "Bhilai", "Warangal", "Cuttack"
];

function selectCity(city) {
  document.getElementById('selected-city').innerText = city;
  document.querySelector('.dropdown-menu.show').classList.remove('show');
}

function populateCityDropdown() {
  const cityMenu = document.getElementById('city-menu');
  cities.forEach(city => {
    const li = document.createElement('li');
                li.textContent = city;
                li.onclick = () => selectCity(city);
                cityMenu.appendChild(li);
            });
        }

        window.onload = function() {
            populateCityDropdown();
        }
        
window.onclick = function(event) {
  if (!event.target.matches('.dropdown-toggle, .dropdown-toggle *')) {
      const dropdowns = document.getElementsByClassName("dropdown-menu");
      for (let i = 0; i < dropdowns.length; i++) {
          const openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
              openDropdown.classList.remove('show');
          }
      }
  }
}
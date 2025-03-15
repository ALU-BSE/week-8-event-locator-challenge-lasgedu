const events = [
    [
        {
          "id": 1,
          "name": "Davido BK Experience",
          "date": "July 7, 2024",
          "location": "BK Arena Kigali",
          "description": "Come watch the Nigerian Afrobeat artist performing at the BK Arena.",
          "image": "images/davido.jpg",
          "details": "Experience an unforgettable night of music and entertainment as Davido takes the stage at the BK Arena in Kigali."
        },
        {
          "id": 2,
          "name": "2025 Trace Awards",
          "date": "July 8, 2024",
          "location": "Onomo Hotels",
          "description": "A Celebration of all African Stars on Africa's biggest night",
          "image": "images/trace.jpg",
          "details": "Join us for the 2025 Trace Awards, where we celebrate the best of African talent."
        },
        {
          "id": 3,
          "name": "Visit Rwanda Traditional Show",
          "date": "July 9, 2024",
          "location": "Amahoro Stadium",
          "description": "Rwandan traditional fusion bands at Open Area competing.",
          "image": "images/dance.jpg",
          "details": "Immerse yourself in Rwandan culture as traditional fusion bands compete for the title of champion. This is a unique opportunity to experience the rich cultural heritage of Rwanda through music and dance."
        },
        {
          "id": 4,
          "name": "2025 Diddy Party",
          "date": "July 10, 2024",
          "location": "Mariots Hotel Kigali",
          "description": "Come and get Oiled up",
          "image": "images/diddy.jpg",
          "details": "Get ready for an unforgettable night at the 2025 Diddy Party hosted at Mariots Hotel Kigali. This exclusive event promises a luxurious experience with great music, vibes, and an opportunity to network with like-minded individuals."
        },
        {
          "id": 5,
          "name": "STEM Innovation Fair",
          "date": "July 11, 2024",
          "location": "University of Rwanda",
          "description": "Showcase of innovative STEM projects.",
          "image": "images/stem.jpeg",
          "details": "Join us at the STEM Innovation Fair, where students and professionals from across the region will present groundbreaking projects. This is your chance to witness the future of science, technology, engineering, and mathematics!"
        },
        {
          "id": 6,
          "name": "Educational Tech Expo",
          "date": "July 12, 2024",
          "location": "African Leadership University",
          "description": "Explore cutting-edge educational technology.",
          "image": "images/edu.jpg",
          "details": "The Educational Tech Expo is a must-attend event for educators, innovators, and tech enthusiasts. Discover the latest advancements in educational tools and technologies that are transforming learning experiences worldwide."
        },
        {
          "id": 7,
          "name": "Kigali Marathon Run",
          "date": "July 13, 2024",
          "location": "Nyandugu Wetland Park",
          "description": "Join us for a fun run in the park.",
          "image": "images/run.jpg",
          "details": "Participate in the Kigali Marathon Run, a community-focused event aimed at promoting fitness and environmental awareness. Enjoy scenic views of Nyandugu Wetland Park while supporting a healthy lifestyle."
        },
        {
          "id": 8,
          "name": "Basketball Tournament",
          "date": "July 14, 2024",
          "location": "Kigali Arena",
          "description": "Watch top teams compete for the championship.",
          "image": "images/ball.jpg",
          "details": "Don't miss the thrilling Basketball Tournament at Kigali Arena, where the best teams in the region battle it out for the championship title. Experience high-energy action and cheer for your favorite team!"
        },
        {
          "id": 9,
          "name": "AFCON Finals",
          "date": "July 15, 2024",
          "location": "Amahoro Stadium",
          "description": "The ultimate showdown of football talent and patriotism between Rwanda and DR Congo.",
          "image": "images/finals.jpg",
          "details": "Witness history in the making as Rwanda and DR Congo face off in the AFCON Finals at Amahoro Stadium. This is more than just a game—it's a celebration of football, pride, and unity. Join thousands of fans for an electrifying atmosphere!"
        }
      ]
  ];
  
  
  function renderEvents(filteredEvents) {
    const container = document.getElementById("eventListContainer");
    container.innerHTML = ""; 
  
    filteredEvents.forEach(event => {
      const card = `
        <div class="col-md-4">
          <div class="card event-card shadow-sm">
            <img src="${event.image}" class="card-img-top" alt="${event.name}">
            <div class="card-body">
              <h5 class="card-title"><a href="event-details.html?eventId=${event.id}">${event.name}</a></h5>
              <p class="card-text">${event.description}</p>
            </div>
          </div>
        </div>
      `;
      container.innerHTML += card;
    });
  }
  

  document.getElementById("searchButton").addEventListener("click", () => {
    const cityInput = document.getElementById("cityInput").value.toLowerCase();
    const categoryFilter = document.getElementById("categoryFilter").value;
    const dateFilter = document.getElementById("dateFilter").value;
  
    let filteredEvents = events;
  
    if (cityInput) {
      filteredEvents = filteredEvents.filter(event =>
        event.location.toLowerCase().includes(cityInput)
      );
    }
  
    if (categoryFilter && categoryFilter !== "all") {
      filteredEvents = filteredEvents.filter(event =>
        event.category === categoryFilter
      );
    }
  
    if (dateFilter) {
      const selectedDate = new Date(dateFilter).toISOString().split("T")[0];
      filteredEvents = filteredEvents.filter(event =>
        new Date(event.date).toISOString().split("T")[0] === selectedDate
      );
    }
  
    renderEvents(filteredEvents);
  });
  

  window.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const eventId = parseInt(urlParams.get("eventId"));
  
    const event = events.find(e => e.id === eventId);
  
    if (event) {
      document.getElementById("eventName").textContent = event.name;
      document.getElementById("eventImage").src = event.image;
      document.getElementById("eventDescription").textContent = event.description;
      document.getElementById("eventDate").textContent = event.date;
      document.getElementById("eventLocation").textContent = event.location;
      document.getElementById("eventDetails").innerHTML = event.details;
    } else {
      document.getElementById("eventName").textContent = "Event Not Found";
    }
  });
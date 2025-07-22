import React, { useState, useEffect } from "react";

// Example data for demonstration
const initialBookings = [
  {
    id: 1,
    name: "Amit Sharma",
    email: "amit@example.com",
    date: "2025-06-22",
    time: "18:00",
    guests: 2,
    room: "Deluxe",
    status: "Confirmed"
  },
  {
    id: 2,
    name: "Sophia Lee",
    email: "sophia@example.com",
    date: "2025-06-23",
    time: "20:00",
    guests: 4,
    room: "Suite",
    status: "Pending"
  },
  {
    id: 3,
    name: "Rahul Verma",
    email: "rahul@example.com",
    date: "2025-06-25",
    time: "15:00",
    guests: 3,
    room: "Family",
    status: "Confirmed"
  }
];

const initialContacts = [
  {
    id: 1,
    name: "Lucas Weber",
    email: "lucas@example.com",
    mobile: "9876543210",
    message: "Do you have vegan options?",
    date: "2025-06-21"
  },
  {
    id: 2,
    name: "Priya Singh",
    email: "priya@example.com",
    mobile: "9123456789",
    message: "Can I get an early check-in?",
    date: "2025-06-22"
  }
];

const initialStaff = [
  {
    id: 1,
    name: "Suresh Kumar",
    role: "Manager",
    contact: "9998887777",
    email: "suresh@hotel.com"
  },
  {
    id: 2,
    name: "Anjali Mehra",
    role: "Receptionist",
    contact: "8887776666",
    email: "anjali@hotel.com"
  }
];

const initialFeedback = [
  {
    id: 1,
    guest: "Amit Sharma",
    rating: 5,
    comment: "Excellent service and clean rooms!",
    date: "2025-06-22"
  },
  {
    id: 2,
    guest: "Sophia Lee",
    rating: 4,
    comment: "Great food, but WiFi was slow.",
    date: "2025-06-23"
  }
];

const statusColors = {
  Confirmed: "bg-green-100 text-green-700",
  Pending: "bg-yellow-100 text-yellow-700",
  Cancelled: "bg-red-100 text-red-700"
};

const emptyBooking = {
  name: "",
  email: "",
  date: "",
  time: "",
  guests: 1,
  room: "Standard",
  status: "Pending"
};

const emptyContact = {
  name: "",
  email: "",
  mobile: "",
  message: "",
  date: ""
};

const emptyStaff = {
  name: "",
  role: "",
  contact: "",
  email: ""
};

const emptyFeedback = {
  guest: "",
  rating: 5,
  comment: "",
  date: ""
};

const roomTypes = ["Standard", "Deluxe", "Suite", "Family", "Presidential"];
const staffRoles = ["Manager", "Receptionist", "Chef", "Housekeeping", "Security"];

const tabList = [
  { key: "dashboard", label: "📊 Dashboard" },
  { key: "bookings", label: "🛏️ Bookings" },
  { key: "contacts", label: "📞 Contacts" },
  { key: "staff", label: "👨‍💼 Staff" },
  { key: "help", label: "❓ Help" }
];

const Admin = () => {
  // Use localStorage for persistence
  const [bookings, setBookings] = useState(() => {
    const saved = localStorage.getItem("bookings");
    return saved ? JSON.parse(saved) : initialBookings;
  });
  const [contacts, setContacts] = useState(() => {
    const saved = localStorage.getItem("contacts");
    return saved ? JSON.parse(saved) : initialContacts;
  });
  const [staff, setStaff] = useState(() => {
    const saved = localStorage.getItem("staff");
    return saved ? JSON.parse(saved) : initialStaff;
  });
  const [feedback, setFeedback] = useState(() => {
    const saved = localStorage.getItem("feedback");
    return saved ? JSON.parse(saved) : initialFeedback;
  });

  useEffect(() => { localStorage.setItem("bookings", JSON.stringify(bookings)); }, [bookings]);
  useEffect(() => { localStorage.setItem("contacts", JSON.stringify(contacts)); }, [contacts]);
  useEffect(() => { localStorage.setItem("staff", JSON.stringify(staff)); }, [staff]);
  useEffect(() => { localStorage.setItem("feedback", JSON.stringify(feedback)); }, [feedback]);

  const [tab, setTab] = useState("dashboard");
  const [editModal, setEditModal] = useState(null);
  const [addModal, setAddModal] = useState(false);
  const [form, setForm] = useState(emptyBooking);

  // For contacts
  const [contactForm, setContactForm] = useState(emptyContact);
  const [addContactModal, setAddContactModal] = useState(false);

  // For staff
  const [staffForm, setStaffForm] = useState(emptyStaff);
  const [addStaffModal, setAddStaffModal] = useState(false);

  // For help
  const helpFaqs = [
    {
      q: "How do I add a new booking?",
      a: "Go to the Bookings tab and click '+ Add Reservation'. Fill the form and submit."
    },
    {
      q: "How do I contact support?",
      a: "Use the Contacts tab to view or add contact queries."
    },
    {
      q: "How do I manage staff?",
      a: "Go to the Staff tab to add, edit, or remove staff members."
    }
  ];

  // Search and filter state for bookings
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");

  // Dashboard summary
  const confirmedCount = bookings.filter(b => b.status === "Confirmed").length;
  const pendingCount = bookings.filter(b => b.status === "Pending").length;
  const cancelledCount = bookings.filter(b => b.status === "Cancelled").length;

  // Booking status update feature
  const handleStatusChange = (id, newStatus) => {
    setBookings(bookings =>
      bookings.map(b =>
        b.id === id ? { ...b, status: newStatus } : b
      )
    );
  };

  // Delete booking
  const handleDelete = id => {
    if (window.confirm("Are you sure you want to delete this booking?")) {
      setBookings(bookings => bookings.filter(b => b.id !== id));
    }
  };

  // Open edit modal
  const openEdit = booking => {
    setForm(booking);
    setEditModal(booking.id);
  };

  // Save edit
  const saveEdit = () => {
    setBookings(bookings =>
      bookings.map(b =>
        b.id === form.id ? { ...form } : b
      )
    );
    setEditModal(null);
  };

  // Add booking
  const saveAdd = () => {
    setBookings(bookings => [
      ...bookings,
      { ...form, id: Date.now() }
    ]);
    setAddModal(false);
    setForm(emptyBooking);
  };

  // Handle form change
  const handleFormChange = e => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: name === "guests" ? Number(value) : value }));
  };

  // Contact handlers
  const saveAddContact = () => {
    setContacts(contacts => [
      ...contacts,
      { ...contactForm, id: Date.now(), date: new Date().toISOString().slice(0, 10) }
    ]);
    setAddContactModal(false);
    setContactForm(emptyContact);
  };

  // Staff handlers
  const saveAddStaff = () => {
    setStaff(staff => [
      ...staff,
      { ...staffForm, id: Date.now() }
    ]);
    setAddStaffModal(false);
    setStaffForm(emptyStaff);
  };

  // Utility for section card
  const SectionCard = ({ title, icon, children, color }) => (
    <div className={`rounded-xl shadow-lg p-6 border-l-4 ${color} bg-white/90`}>
      <div className="flex items-center gap-2 mb-2">
        <span className="text-2xl">{icon}</span>
        <h4 className="text-xl font-bold text-royal">{title}</h4>
      </div>
      {children}
    </div>
  );

  // Tab Switcher
  const TabSwitcher = () => (
    <div className="flex gap-2 md:gap-4 justify-center mb-8 flex-wrap">
      {tabList.map(t => (
        <button
          key={t.key}
          className={`px-4 py-2 rounded-full font-semibold shadow transition ${
            tab === t.key
              ? "bg-yellow-400 text-[#232946] scale-105"
              : "bg-white text-[#6a4fb6] border-2 border-yellow-400 hover:bg-yellow-100"
          }`}
          onClick={() => setTab(t.key)}
        >
          {t.label}
        </button>
      ))}
    </div>
  );

  // Filtered and searched bookings
  const filteredBookings = bookings.filter(b => {
    const matchesStatus = filterStatus === "All" || b.status === filterStatus;
    const matchesSearch =
      b.name.toLowerCase().includes(search.toLowerCase()) ||
      b.email.toLowerCase().includes(search.toLowerCase()) ||
      b.room.toLowerCase().includes(search.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-[#232946] via-[#f7c873] to-[#0f5132]">
      {/* Sidebar */}
      <aside className="w-64 min-h-screen bg-[#232946] text-white flex flex-col py-10 px-4 shadow-2xl">
        <h2 className="text-3xl font-extrabold mb-10 text-center tracking-wide text-gold">Admin</h2>
        <nav className="flex flex-col gap-4">
          {tabList.map(t => (
            <button
              key={t.key}
              className={`py-3 px-4 rounded-lg text-lg font-semibold text-left transition ${
                tab === t.key
                  ? "bg-gold text-royal shadow-lg"
                  : "hover:bg-gold/20"
              }`}
              onClick={() => setTab(t.key)}
            >
              {t.label}
            </button>
          ))}
        </nav>
        <div className="flex-1"></div>
        <div className="text-center text-xs text-gray-400 mt-10">Hotel Management Admin © 2025</div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 py-10 px-4 md:px-12 bg-white/95">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-extrabold text-royal mb-8 text-center drop-shadow font-['Playfair_Display',serif] tracking-wide">
            Admin Panel
          </h2>
          <TabSwitcher />

          {/* Dashboard */}
          {tab === "dashboard" && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
                <SectionCard title="Confirmed Bookings" icon="✅" color="border-green-400">
                  <span className="text-3xl font-bold text-green-700">{confirmedCount}</span>
                </SectionCard>
                <SectionCard title="Pending Bookings" icon="⏳" color="border-yellow-400">
                  <span className="text-3xl font-bold text-yellow-700">{pendingCount}</span>
                </SectionCard>
                <SectionCard title="Cancelled Bookings" icon="❌" color="border-red-400">
                  <span className="text-3xl font-bold text-red-700">{cancelledCount}</span>
                </SectionCard>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <SectionCard title="Recent Feedback" icon="⭐" color="border-yellow-400">
                  <ul>
                    {feedback.slice(-3).reverse().map(f => (
                      <li key={f.id} className="mb-2 border-b pb-2">
                        <span className="font-semibold">{f.guest}</span> ({f.date}): <span className="italic">"{f.comment}"</span>
                        <span className="ml-2 text-yellow-500">{"★".repeat(f.rating)}</span>
                      </li>
                    ))}
                  </ul>
                </SectionCard>
                <SectionCard title="Staff On Duty" icon="👨‍💼" color="border-purple-400">
                  <ul>
                    {staff.map(s => (
                      <li key={s.id} className="mb-2">
                        <span className="font-semibold">{s.name}</span> - {s.role}
                      </li>
                    ))}
                  </ul>
                </SectionCard>
              </div>
            </>
          )}

          {/* Bookings */}
          {tab === "bookings" && (
            <div>
              {/* Search and Filter */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Search by name, email, or room"
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    className="px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                  <select
                    value={filterStatus}
                    onChange={e => setFilterStatus(e.target.value)}
                    className="px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  >
                    <option value="All">All Status</option>
                    <option value="Confirmed">Confirmed</option>
                    <option value="Pending">Pending</option>
                    <option value="Cancelled">Cancelled</option>
                  </select>
                </div>
                <button
                  className="px-4 py-2 bg-emerald-500 text-white rounded-full font-semibold shadow hover:bg-emerald-600 transition"
                  onClick={() => { setAddModal(true); setForm(emptyBooking); }}
                >
                  + Add Reservation
                </button>
              </div>
              <div className="overflow-x-auto rounded-xl border border-gray-200">
                <table className="min-w-full bg-white rounded-lg shadow">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="py-2 px-4 border-b">Name</th>
                      <th className="py-2 px-4 border-b">Email</th>
                      <th className="py-2 px-4 border-b">Date</th>
                      <th className="py-2 px-4 border-b">Time</th>
                      <th className="py-2 px-4 border-b">Guests</th>
                      <th className="py-2 px-4 border-b">Room</th>
                      <th className="py-2 px-4 border-b">Status</th>
                      <th className="py-2 px-4 border-b">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredBookings.map((b) => (
                      <tr key={b.id} className="text-center hover:bg-yellow-50 transition">
                        <td className="py-2 px-4 border-b">{b.name}</td>
                        <td className="py-2 px-4 border-b">{b.email}</td>
                        <td className="py-2 px-4 border-b">{b.date}</td>
                        <td className="py-2 px-4 border-b">{b.time}</td>
                        <td className="py-2 px-4 border-b">{b.guests}</td>
                        <td className="py-2 px-4 border-b">{b.room}</td>
                        <td className="py-2 px-4 border-b">
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-bold ${statusColors[b.status] || "bg-gray-100 text-gray-700"}`}
                          >
                            {b.status}
                          </span>
                        </td>
                        <td className="py-2 px-4 border-b flex gap-2 justify-center">
                          <select
                            value={b.status}
                            onChange={e => handleStatusChange(b.id, e.target.value)}
                            className="px-2 py-1 rounded border focus:outline-none"
                          >
                            <option value="Confirmed">Confirmed</option>
                            <option value="Pending">Pending</option>
                            <option value="Cancelled">Cancelled</option>
                          </select>
                          <button
                            className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                            onClick={() => openEdit(b)}
                          >
                            Edit
                          </button>
                          <button
                            className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
                            onClick={() => handleDelete(b.id)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                    {filteredBookings.length === 0 && (
                      <tr>
                        <td colSpan={8} className="py-4 text-gray-500">
                          No reservations found.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>

              {/* Edit Booking Modal */}
              {editModal && (
                <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
                  <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-lg relative animate-fade-in">
                    <h3 className="text-2xl font-bold mb-4 text-royal">Edit Booking</h3>
                    <form
                      onSubmit={e => {
                        e.preventDefault();
                        saveEdit();
                      }}
                      className="space-y-4"
                    >
                      <div className="flex gap-4">
                        <div className="flex-1">
                          <label className="block font-semibold mb-1">Name</label>
                          <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleFormChange}
                            className="w-full border rounded px-3 py-2"
                            required
                          />
                        </div>
                        <div className="flex-1">
                          <label className="block font-semibold mb-1">Email</label>
                          <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleFormChange}
                            className="w-full border rounded px-3 py-2"
                            required
                          />
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="flex-1">
                          <label className="block font-semibold mb-1">Date</label>
                          <input
                            type="date"
                            name="date"
                            value={form.date}
                            onChange={handleFormChange}
                            className="w-full border rounded px-3 py-2"
                            required
                          />
                        </div>
                        <div className="flex-1">
                          <label className="block font-semibold mb-1">Time</label>
                          <input
                            type="time"
                            name="time"
                            value={form.time}
                            onChange={handleFormChange}
                            className="w-full border rounded px-3 py-2"
                            required
                          />
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="flex-1">
                          <label className="block font-semibold mb-1">Guests</label>
                          <input
                            type="number"
                            name="guests"
                            min={1}
                            value={form.guests}
                            onChange={handleFormChange}
                            className="w-full border rounded px-3 py-2"
                            required
                          />
                        </div>
                        <div className="flex-1">
                          <label className="block font-semibold mb-1">Room</label>
                          <select
                            name="room"
                            value={form.room}
                            onChange={handleFormChange}
                            className="w-full border rounded px-3 py-2"
                            required
                          >
                            {roomTypes.map(rt => (
                              <option key={rt} value={rt}>{rt}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div>
                        <label className="block font-semibold mb-1">Status</label>
                        <select
                          name="status"
                          value={form.status}
                          onChange={handleFormChange}
                          className="w-full border rounded px-3 py-2"
                          required
                        >
                          <option value="Confirmed">Confirmed</option>
                          <option value="Pending">Pending</option>
                          <option value="Cancelled">Cancelled</option>
                        </select>
                      </div>
                      <div className="flex justify-end gap-2 pt-4">
                        <button
                          type="button"
                          className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 transition"
                          onClick={() => setEditModal(null)}
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          className="px-4 py-2 bg-emerald-500 text-white rounded hover:bg-emerald-600 transition"
                        >
                          Save
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              )}

              {/* Add Booking Modal */}
              {addModal && (
                <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
                  <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-lg relative animate-fade-in">
                    <h3 className="text-2xl font-bold mb-4 text-royal">Add Booking</h3>
                    <form
                      onSubmit={e => {
                        e.preventDefault();
                        saveAdd();
                      }}
                      className="space-y-4"
                    >
                      <div className="flex gap-4">
                        <div className="flex-1">
                          <label className="block font-semibold mb-1">Name</label>
                          <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleFormChange}
                            className="w-full border rounded px-3 py-2"
                            required
                          />
                        </div>
                        <div className="flex-1">
                          <label className="block font-semibold mb-1">Email</label>
                          <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleFormChange}
                            className="w-full border rounded px-3 py-2"
                            required
                          />
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="flex-1">
                          <label className="block font-semibold mb-1">Date</label>
                          <input
                            type="date"
                            name="date"
                            value={form.date}
                            onChange={handleFormChange}
                            className="w-full border rounded px-3 py-2"
                            required
                          />
                        </div>
                        <div className="flex-1">
                          <label className="block font-semibold mb-1">Time</label>
                          <input
                            type="time"
                            name="time"
                            value={form.time}
                            onChange={handleFormChange}
                            className="w-full border rounded px-3 py-2"
                            required
                          />
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="flex-1">
                          <label className="block font-semibold mb-1">Guests</label>
                          <input
                            type="number"
                            name="guests"
                            min={1}
                            value={form.guests}
                            onChange={handleFormChange}
                            className="w-full border rounded px-3 py-2"
                            required
                          />
                        </div>
                        <div className="flex-1">
                          <label className="block font-semibold mb-1">Room</label>
                          <select
                            name="room"
                            value={form.room}
                            onChange={handleFormChange}
                            className="w-full border rounded px-3 py-2"
                            required
                          >
                            {roomTypes.map(rt => (
                              <option key={rt} value={rt}>{rt}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div>
                        <label className="block font-semibold mb-1">Status</label>
                        <select
                          name="status"
                          value={form.status}
                          onChange={handleFormChange}
                          className="w-full border rounded px-3 py-2"
                          required
                        >
                          <option value="Confirmed">Confirmed</option>
                          <option value="Pending">Pending</option>
                          <option value="Cancelled">Cancelled</option>
                        </select>
                      </div>
                      <div className="flex justify-end gap-2 pt-4">
                        <button
                          type="button"
                          className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 transition"
                          onClick={() => setAddModal(false)}
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          className="px-4 py-2 bg-emerald-500 text-white rounded hover:bg-emerald-600 transition"
                        >
                          Add
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Contacts */}
          {tab === "contacts" && (
            <div>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold text-royal">Contact Queries</h3>
                <button
                  className="px-4 py-2 bg-blue-500 text-white rounded-full font-semibold shadow hover:bg-blue-600 transition"
                  onClick={() => setAddContactModal(true)}
                >
                  + Add Contact
                </button>
              </div>
              <div className="overflow-x-auto rounded-xl border border-gray-200">
                <table className="min-w-full bg-white rounded-lg shadow">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="py-2 px-4 border-b">Name</th>
                      <th className="py-2 px-4 border-b">Email</th>
                      <th className="py-2 px-4 border-b">Mobile</th>
                      <th className="py-2 px-4 border-b">Message</th>
                      <th className="py-2 px-4 border-b">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {contacts.map(c => (
                      <tr key={c.id} className="text-center hover:bg-yellow-50 transition">
                        <td className="py-2 px-4 border-b">{c.name}</td>
                        <td className="py-2 px-4 border-b">{c.email}</td>
                        <td className="py-2 px-4 border-b">{c.mobile}</td>
                        <td className="py-2 px-4 border-b">{c.message}</td>
                        <td className="py-2 px-4 border-b">{c.date}</td>
                      </tr>
                    ))}
                    {contacts.length === 0 && (
                      <tr>
                        <td colSpan={5} className="py-4 text-gray-500">
                          No contacts found.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
              {/* Add Contact Modal */}
              {addContactModal && (
                <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
                  <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-lg relative animate-fade-in">
                    <h3 className="text-2xl font-bold mb-4 text-royal">Add Contact</h3>
                    <form
                      onSubmit={e => {
                        e.preventDefault();
                        saveAddContact();
                      }}
                      className="space-y-4"
                    >
                      <input type="text" name="name" placeholder="Name" value={contactForm.name} onChange={e => setContactForm(f => ({ ...f, name: e.target.value }))} className="w-full border rounded px-3 py-2" required />
                      <input type="email" name="email" placeholder="Email" value={contactForm.email} onChange={e => setContactForm(f => ({ ...f, email: e.target.value }))} className="w-full border rounded px-3 py-2" required />
                      <input type="text" name="mobile" placeholder="Mobile" value={contactForm.mobile} onChange={e => setContactForm(f => ({ ...f, mobile: e.target.value }))} className="w-full border rounded px-3 py-2" required />
                      <textarea name="message" placeholder="Message" value={contactForm.message} onChange={e => setContactForm(f => ({ ...f, message: e.target.value }))} className="w-full border rounded px-3 py-2" required />
                      <div className="flex justify-end gap-2 pt-4">
                        <button type="button" className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 transition" onClick={() => setAddContactModal(false)}>Cancel</button>
                        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">Add</button>
                      </div>
                    </form>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Staff */}
          {tab === "staff" && (
            <div>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold text-royal">Staff Management</h3>
                <button
                  className="px-4 py-2 bg-purple-500 text-white rounded-full font-semibold shadow hover:bg-purple-600 transition"
                  onClick={() => setAddStaffModal(true)}
                >
                  + Add Staff
                </button>
              </div>
              <div className="overflow-x-auto rounded-xl border border-gray-200">
                <table className="min-w-full bg-white rounded-lg shadow">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="py-2 px-4 border-b">Name</th>
                      <th className="py-2 px-4 border-b">Role</th>
                      <th className="py-2 px-4 border-b">Contact</th>
                      <th className="py-2 px-4 border-b">Email</th>
                    </tr>
                  </thead>
                  <tbody>
                    {staff.map(s => (
                      <tr key={s.id} className="text-center hover:bg-yellow-50 transition">
                        <td className="py-2 px-4 border-b">{s.name}</td>
                        <td className="py-2 px-4 border-b">{s.role}</td>
                        <td className="py-2 px-4 border-b">{s.contact}</td>
                        <td className="py-2 px-4 border-b">{s.email}</td>
                      </tr>
                    ))}
                    {staff.length === 0 && (
                      <tr>
                        <td colSpan={4} className="py-4 text-gray-500">
                          No staff found.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
              {/* Add Staff Modal */}
              {addStaffModal && (
                <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
                  <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-lg relative animate-fade-in">
                    <h3 className="text-2xl font-bold mb-4 text-royal">Add Staff</h3>
                    <form
                      onSubmit={e => {
                        e.preventDefault();
                        saveAddStaff();
                      }}
                      className="space-y-4"
                    >
                      <input type="text" name="name" placeholder="Name" value={staffForm.name} onChange={e => setStaffForm(f => ({ ...f, name: e.target.value }))} className="w-full border rounded px-3 py-2" required />
                      <select name="role" value={staffForm.role} onChange={e => setStaffForm(f => ({ ...f, role: e.target.value }))} className="w-full border rounded px-3 py-2" required>
                        <option value="">Select Role</option>
                        {staffRoles.map(role => <option key={role} value={role}>{role}</option>)}
                      </select>
                      <input type="text" name="contact" placeholder="Contact" value={staffForm.contact} onChange={e => setStaffForm(f => ({ ...f, contact: e.target.value }))} className="w-full border rounded px-3 py-2" required />
                      <input type="email" name="email" placeholder="Email" value={staffForm.email} onChange={e => setStaffForm(f => ({ ...f, email: e.target.value }))} className="w-full border rounded px-3 py-2" required />
                      <div className="flex justify-end gap-2 pt-4">
                        <button type="button" className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 transition" onClick={() => setAddStaffModal(false)}>Cancel</button>
                        <button type="submit" className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 transition">Add</button>
                      </div>
                    </form>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Help */}
          {tab === "help" && (
            <div>
              <h3 className="text-2xl font-bold text-royal mb-4">Help & FAQ</h3>
              <div className="space-y-4">
                {helpFaqs.map((faq, idx) => (
                  <div key={idx} className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded shadow">
                    <div className="font-semibold text-lg mb-1">{faq.q}</div>
                    <div className="text-gray-700">{faq.a}</div>
                  </div>
                ))}
              </div>
              <div className="mt-8 text-center text-gray-500">
                For more help, contact us at <a href="mailto:support@hotel.com" className="text-blue-600 underline">support@hotel.com</a>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Admin;
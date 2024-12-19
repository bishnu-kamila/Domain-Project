const Notification = ()=>{
    const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Fetch notifications from the backend API
    axios.get("http://localhost:5000/notifications")
      .then(response => setNotifications(response.data))
      .catch(error => console.error("Error fetching notifications:", error));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-6">Notifications</h1>
      <div className="w-full max-w-3xl space-y-4">
        {notifications.map(notification => (
          <div
            key={notification.id}
            className="bg-white p-4 rounded-lg shadow-md border-l-4 border-blue-500"
          >
            <h2 className="text-xl font-semibold">{notification.title}</h2>
            <p className="text-gray-600">{notification.content}</p>
            <p className="text-sm text-gray-400 mt-2">
              {new Date(notification.timestamp).toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Notification
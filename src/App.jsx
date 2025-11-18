import "./App.css";

function App() {
	const services = [
		{
			id: 1,
			title: "SISTEM INFORMASI",
			subtitle: "MONITORING BARANG HABIS PAKAI",
			icon: "/writing.png",
			iconType: "image",
			color: "bg-gradient-to-br from-blue-400 to-blue-600",
			url: "http://192.168.20.144:8000/login",
		},
		{
			id: 2,
			title: "SISTEM INFORMASI",
			subtitle: "BUKU TAMU DIGITAL",
			icon: "/book.png",
			iconType: "image",
			color: "bg-gradient-to-br from-blue-400 to-blue-600",
			url: "http://192.168.20.144:8001/login",
		},
		// {
		// 	id: 3,
		// 	title: "SISTEM INFORMASI",
		// 	subtitle: "MANAJEMEN PEMINJAMAN",
		// 	icon: "■",
		// 	iconType: "text",
		// 	color: "bg-gradient-to-br from-blue-400 to-blue-600",
		// 	url: "http://127.0.0.1:8002/login",
		// },
	];

	const handleServiceClick = (url) => {
		window.open(url, "_blank");
	};

	return (
		<div className="app">
			{/* Header */}
			<header className="header">
				<div className="header-content">
					<div className="logo-left">
						<img src="/logo-pal.png" alt="Logo PJ" className="pj-logo-img" />
					</div>
					<div className="blue-separator"></div>
					<div className="header-title">
						<h1>SISTEM INFORMASI ONE STOP SERVICES</h1>
						<h2>PERUMDA PALJAYA</h2>
					</div>
					<div className="logo-right">
						<img
							src="/jakarta.png"
							alt="Logo Jakarta"
							className="logo-paljaya"
						/>
					</div>
				</div>
			</header>

			{/* Main Content */}
			<main className="main-content">
				<div className="services-container">
					{services.map((service) => (
						<div
							key={service.id}
							className={`service-card ${service.color}`}
							onClick={() => handleServiceClick(service.url)}>
							<div className="service-icon">
								{service.iconType === "image" ? (
									<img
										src={service.icon}
										alt={service.subtitle}
										className="service-icon-img"
									/>
								) : (
									service.icon
								)}
							</div>
							<div className="service-text">
								<h3>{service.title}</h3>
								<h4>{service.subtitle}</h4>
							</div>
						</div>
					))}
				</div>
			</main>

			{/* Footer */}
			<footer className="footer">
				<div className="footer-content">
					<div className="contact-item">
						<img src="/mail.png" alt="Email" className="contact-icon-img" />
						<span>paljaya@paljaya.com</span>
					</div>
					<div className="contact-item">
						<img
							src="/instagram.png"
							alt="Instagram"
							className="contact-icon-img"
						/>
						<span>@palpaljaya</span>
					</div>
					<div className="contact-item">
						<img
							src="/facebook.png"
							alt="Facebook"
							className="contact-icon-img"
						/>
						<span>Perumda Paljaya</span>
					</div>
					<div className="contact-item">
						<img
							src="/youtube.png"
							alt="YouTube"
							className="contact-icon-img"
						/>
						<span>Perumda Paljaya</span>
					</div>
					<div className="contact-item">
						<span className="contact-icon">🌐</span>
						<span>www.paljaya.com</span>
					</div>
				</div>
			</footer>
		</div>
	);
}

export default App;

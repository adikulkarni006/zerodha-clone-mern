import React from "react";

function CreateTicket() {
  const ticketCategories = [
    {
      title: "Account Opening",
      icon: "fa-user-plus",
      links: [
        "Online Account Opening",
        "Offline Account Opening",
        "NRI Account Opening",
        "Charges at Zerodha",
        "Getting Started",
      ],
    },
    {
      title: "Your Zerodha Account",
      icon: "fa-user",
      links: [
        "Profile Update",
        "Mobile Number Change",
        "Email Change",
        "Bank Account Change",
        "Nomination",
      ],
    },
    {
      title: "Kite",
      icon: "fa-chart-line",
      links: [
        "Login Issues",
        "Order Rejected",
        "Margin Issues",
        "Watchlist",
        "Charts & Tools",
      ],
    },
    {
      title: "Funds",
      icon: "fa-wallet",
      links: [
        "Add Funds",
        "Withdraw Funds",
        "UPI Issues",
        "Net Banking",
        "Fund Transfer Status",
      ],
    },
    {
      title: "Console",
      icon: "fa-file-alt",
      links: [
        "P&L Reports",
        "Tax Reports",
        "Contract Notes",
        "Portfolio Reports",
        "Ledger",
      ],
    },
    {
      title: "Coin",
      icon: "fa-coins",
      links: [
        "Mutual Funds",
        "SIP",
        "Redeem Funds",
        "NAV Issues",
        "Portfolio Tracking",
      ],
    },
  ];

  return (
    <div className="container py-5">
      <h2 className="mb-5 text-center fw-bold">
        Create a Support Ticket
      </h2>

      <div className="row g-4">
        {ticketCategories.map((category, index) => (
          <div className="col-md-6 col-lg-4" key={index}>
            <div
              className="card h-100 border-0 shadow-sm"
              style={{
                borderRadius: "18px",
                transition: "0.3s",
              }}
            >
              <div className="card-body p-4">
                <h5 className="fw-bold mb-3">
                  <i
                    className={`fas ${category.icon} me-2 text-primary`}
                  ></i>
                  {category.title}
                </h5>

                {category.links.map((link, i) => (
                  <div key={i}>
                    <a
                      href="/"
                      style={{
                        textDecoration: "none",
                        lineHeight: "2.2",
                        color: "#387ed1",
                      }}
                    >
                      {link}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CreateTicket;
const doctors = [
    { name: "Dr. Sharma", specialization: "Cardiologist", area: "Sector 14" },
    { name: "Dr. Mehta", specialization: "Cardiologist", area: "Sector 14" },
    { name: "Dr. Verma", specialization: "Dentist", area: "Sector 14" },
    { name: "Dr. Gupta", specialization: "Dentist", area: "Sector 12" },
    { name: "Dr. Rao", specialization: "Dermatologist", area: "Sector 14" },
    { name: "Dr. Khan", specialization: "Dermatologist", area: "Sector 10" },
    { name: "Dr. Singh", specialization: "Cardiologist", area: "Sector 12" },
    { name: "Dr. Kapoor", specialization: "Dentist", area: "Sector 14" },
    { name: "Dr. Joshi", specialization: "Dermatologist", area: "Sector 14" },
    { name: "Dr. Reddy", specialization: "Cardiologist", area: "Sector 14" }
];

function findDoctors() {
    const specialization = document.getElementById("specialization").value;
    const area = document.getElementById("area").value;
    const doctorList = document.getElementById("doctorList");

    doctorList.innerHTML = "";

    if (specialization === "" || area === "") {
        alert("Please select specialization and enter area");
        return;
    }

    const filteredDoctors = doctors.filter(doc =>
        doc.specialization === specialization &&
        doc.area.toLowerCase() === area.toLowerCase()
    );

    const top10 = filteredDoctors.slice(0, 10);

    if (top10.length === 0) {
        doctorList.innerHTML = "<li>No doctors found in your area.</li>";
    } else {
        top10.forEach(doc => {
            const li = document.createElement("li");
            li.textContent = `${doc.name} - ${doc.specialization} (${doc.area})`;
            doctorList.appendChild(li);
        });
    }
}

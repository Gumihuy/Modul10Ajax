document.getElementById("formSapaan").addEventListener("submit", function (e) {
    e.preventDefault(); // Mencegah submit form default

    const nama = document.getElementById("nama").value.trim(); // Ambil input dan hilangkan spasi
    const feedback = document.getElementById("feedback");

    if (nama === "") {
        // Jika input kosong
        feedback.textContent = "Isi tidak boleh kosong!";
        feedback.className = "error";
        return;
    }

    // Kirim data menggunakan AJAX
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "process.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.onload = function () {
        if (xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);

            if (response.success) {
                feedback.textContent = response.message;
                feedback.className = "success";

                // Reset form dan kembalikan placeholder
                document.getElementById("nama").value = "";
                setTimeout(() => {
                    feedback.textContent = "Silahkan isi nama anda.";
                    feedback.className = "";
                }, 3000);
            } else {
                feedback.textContent = response.message;
                feedback.className = "error";
            }
        }
    };

    xhr.send(`nama=${encodeURIComponent(nama)}`);
});

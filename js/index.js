const copyEmailBtn = document.getElementById("copyEmailBtn");

if (copyEmailBtn) {
  copyEmailBtn.addEventListener("click", async () => {
    const email = copyEmailBtn.dataset.email;
    try {
      await navigator.clipboard.writeText(email);
    } catch (err) {
      const temp = document.createElement("textarea");
      temp.value = email;
      document.body.appendChild(temp);
      temp.select();
      document.execCommand("copy");
      document.body.removeChild(temp);
    }
    const originalText = copyEmailBtn.textContent;
    copyEmailBtn.textContent = "Copied!";
    setTimeout(() => {
      copyEmailBtn.textContent = originalText;
    }, 1500);
  });
}

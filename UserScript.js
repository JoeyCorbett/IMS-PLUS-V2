// ==UserScript==
// @name         IMS+ v0.2
// @namespace    http://tampermonkey.net/
// @version      0.1.0
// @description  Provides functionality to IMS including Shortcuts/Visual Improvements
// @author       JoeyCorbett
// @author       TylerMong
// @match        https://ims.stockton.edu/*
// @require      https://cdn.jsdelivr.net/npm/sweetalert2@10
// @require      https://kit.fontawesome.com/f54d2a88b1.js
// @grant        none
// ==/UserScript==

// GUI
(function ()
{
    function addButton()
    {
        const buttonPanel = document.querySelector("#root > div > nav")
        if (buttonPanel)
        {
            const imsPlusButton = document.createElement("a")
            const imsPlusButtonIcon = document.createElement("span")
            const imsPlusButtonText = document.createElement("div")

            buttonPanel.appendChild(imsPlusButton)

            imsPlusButton.className = "mantine-focus-never i-root-iHDUF m-f0824112 mantine-NavLink-root m-87cf2631 mantine-UnstyledButton-root"
            imsPlusButton.href = "/ng/ims-plus-dashboard"
            imsPlusButton.appendChild(imsPlusButtonIcon)
            imsPlusButton.appendChild(imsPlusButtonText)

            imsPlusButtonIcon.className = "i-section-hng4R m-690090b5 mantine-NavLink-section"
            imsPlusButtonIcon.setAttribute("data-position", "left")
            imsPlusButtonIcon.innerHTML = "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"icon icon-tabler icon-tabler-device-desktop-plus\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentcolor\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n" +
                "  <path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"/>\n" +
                "  <path d=\"M13.5 16h-9.5a1 1 0 0 1 -1 -1v-10a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v7.5\" />\n" +
                "  <path d=\"M7 20h5\" />\n" +
                "  <path d=\"M9 16v4\" />\n" +
                "  <path d=\"M16 19h6\" />\n" +
                "  <path d=\"M19 16v6\" />\n" +
                "</svg>"

            imsPlusButtonText.className = "m-f07af9d2 mantine-NavLink-body"
            imsPlusButtonText.innerHTML = "<span class=\"m-1f6ac4c4 mantine-NavLink-label\">IMS+</span>"
            imsPlusButtonText.innerHTML += "<span class=\"m-57492dcc mantine-NavLink-description\"></span>"
        }
    }

    function buildDashboard()
    {
        if (window.location.href === "https://ims.stockton.edu/ng/ims-plus-dashboard")
        {
            clearPage()
            buildHome()
        }
    }

    function clearPage()
    {
        document.body.innerHTML = ""
    }

    // reads home.html and injects it into the body
    function buildHome()
    {
        fetch("https://raw.githubusercontent.com/JoeyCorbett/IMS-Plus/main/home.html")
            .then(response => response.text())
            .then(data => {
                document.body.innerHTML = data
            })
    }

    setTimeout(addButton, 1000)
    buildDashboard()

})();
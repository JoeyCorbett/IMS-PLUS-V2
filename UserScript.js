// ==UserScript==
// @name         IMS+ V2
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Provides functionality to IMS 
// @author       JoeyCorbett
// @author       TylerMong
// @match        https://ims.stockton.edu/*
// @require      https://cdn.jsdelivr.net/npm/sweetalert2@10
// @require      https://kit.fontawesome.com/f54d2a88b1.js
// @downloadURL  https://github.com/JoeyCorbett/IMS-PLUS/blob/main/Main%20Script.js
// @updateURL    https://github.com/JoeyCorbett/IMS-PLUS/blob/main/Main%20Script.js
// @grant        none
// ==/UserScript==

// SHORTCUTS
(function () {
    'use strict'

    function resolveAndReopenTicket(event) {
        if (event.ctrlKey && event.key === 'Enter') {
            const ResolveButton = document.querySelector('button.mantine-focus-never.mantine-active.m-77c9d27d.mantine-Button-root.m-87cf2631.mantine-UnstyledButton-root');
            if (ResolveButton) {
                ResolveButton.click();
            }
            
        }
        if (event.ctrlKey && event.key === 'Enter') {
            const ReOpenButton = document.querySelectorAll('button.mantine-focus-never.mantine-active.m-77c9d27d.mantine-Button-root.m-87cf2631.mantine-UnstyledButton-root');
            if (ReOpenButton) {
                ReOpenButton.click();
            }
        }
    }

    function selectCommentBox(event) {
        if (event.ctrlKey && event.key === '\\') {
            // Dark Mode
            const textarea_dark = document.querySelector('.m-8fb7ebe7.mantine-Input-input.mantine-Textarea-input');
            if (textarea_dark) {
                textarea_dark.select();
            }
        }
    }

    function SelectAccounts(event) {
        if (event.altKey && event.key === 'a') {
            const Accounts_button = document.querySelector('a[href="/ng/accounts"].mantine-focus-never.i-root-iHDUF.m-f0824112.mantine-NavLink-root.m-87cf2631.mantine-UnstyledButton-root');
            if (Accounts_button) {
                Accounts_button.click();     
            }
        }
    }

    function search(event) {
        if (event.altKey && event.key === 's') {
            // Dark Mode
            const search_button = document.querySelector('button[data-variant="default"][data-size="lg"][aria-label="Search"]');
            if (search_button) {
                search_button.click();
            }
            const input_field = document.querySelector('.ims-sel__input-container.css-n9qnu9')
            if (input_field) {
                input_field.focus();
            }
        }
    }

    document.addEventListener('keydown', resolveAndReopenTicket);
    document.addEventListener('keydown', selectCommentBox);
    document.addEventListener('keydown', SelectAccounts);
    document.addEventListener('keydown', search);
})();


// GUI

// Visual Tweaks
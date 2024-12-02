// Function to get AI prompts data from localStorage or default
function getAIPrompts() {
    const prompts = localStorage.getItem('aiPrompts');
    if (prompts) {
        return JSON.parse(prompts);
    } else {
        const defaultPrompts = {
            "Data Types and Variables": [
                "Provide multiple examples of declaring and using variables in [language name].",
                "Explain and demonstrate how to work with integers, floats, and strings in [language name] with code examples.",
                "Show detailed code examples of using enumerated types in [language name].",
                "Write comprehensive examples of defining and using arrays in [language name].",
                "Provide detailed code examples of using lists in [language name].",
                "Explain and demonstrate how to work with dictionaries in [language name] with code examples.",
                "Write detailed examples of using sets in [language name].",
                "Show comprehensive code examples of working with tuples in [language name]."
            ],
            "Control Structures": [
                "Provide multiple examples of using if-else statements in [language name] with detailed code.",
                "Explain and demonstrate how to use switch statements in [language name] with code examples.",
                "Provide detailed code examples of using for loops in [language name].",
                "Show comprehensive examples of using while loops in [language name] with code.",
                "Write detailed examples of using do-while loops in [language name].",
                "Explain and demonstrate how to use break and continue statements in [language name] with code examples.",
                "Show detailed code examples of using labels and gotos in [language name]."
            ],
            "Functions and Methods": [
                "Provide multiple examples of defining and calling functions in [language name] with detailed code.",
                "Explain and demonstrate how to work with function arguments in [language name] with code examples.",
                "Provide detailed code examples of using default and optional function arguments in [language name].",
                "Show comprehensive examples of using return values in [language name] with code.",
                "Write detailed examples of using lambda functions in [language name]."
            ],
            "Object-Oriented Programming (OOP)": [
                "Explain and demonstrate how to define and use classes in [language name] with detailed code examples.",
                "Show comprehensive code examples of creating objects and instancing classes in [language name].",
                "Write detailed examples of using inheritance in [language name].",
                "Explain and demonstrate how to use polymorphism in [language name] with code examples.",
                "Provide detailed code examples of defining and using interfaces in [language name]."
            ],
            "Regular Expressions (Regex)": [
                "Provide multiple examples of using regex patterns in [language name] with detailed code.",
                "Explain and demonstrate how to work with capturing groups in [language name] with code examples.",
                "Provide detailed code examples of using regex substitutions in [language name].",
                "Show comprehensive examples of using regex validation in [language name] with code.",
                "Write detailed examples of using regex callbacks in [language name]."
            ],
            "File Input/Output": [
                "Explain and demonstrate how to read and write text files in [language name] with detailed code examples.",
                "Show comprehensive code examples of working with binary files in [language name].",
                "Write detailed examples of using CSV and JSON file formats in [language name].",
                "Provide detailed code examples of working with file streams in [language name].",
                "Explain and demonstrate how to use file I/O with exceptions in [language name] with code examples."
            ],
            "Error Handling": [
                "Provide multiple examples of using try-catch blocks in [language name] with detailed code.",
                "Explain and demonstrate how to work with exception types in [language name] with code examples.",
                "Provide detailed code examples of using custom error classes in [language name].",
                "Show comprehensive examples of using finally blocks in [language name] with code.",
                "Write detailed examples of using error messages and logs in [language name]."
            ],
            "Networking and Web Development": [
                "Provide multiple examples of using HTTP requests in [language name] with detailed code.",
                "Explain and demonstrate how to work with websockets in [language name] with code examples.",
                "Provide detailed code examples of using FTP/SFTP/SSH in [language name].",
                "Show comprehensive examples of using XML/JSON data with web services in [language name] with code.",
                "Write detailed examples of using web frameworks like Flask/Django in [language name]."
            ],
            "Databases": [
                "Explain and demonstrate how to connect to a database in [language name] with detailed code examples.",
                "Show comprehensive code examples of creating and querying tables in [language name].",
                "Write detailed examples of using SQL queries with JOINs and subqueries in [language name].",
                "Provide detailed code examples of using prepared statements in [language name].",
                "Explain and demonstrate how to use transactions with database operations in [language name] with code examples."
            ],
            "SQLite": [
                "Explain and demonstrate how to set up and connect to a SQLite database in [language name] with detailed code examples.",
                "Provide detailed code examples of creating tables in SQLite using [language name].",
                "Write comprehensive examples of inserting, updating, and deleting records in SQLite with [language name].",
                "Show detailed code examples of querying SQLite databases using [language name].",
                "Explain and demonstrate how to handle SQLite database transactions in [language name] with code examples."
            ],
            "MySQL": [
                "Explain and demonstrate how to set up and connect to a MySQL database in [language name] with detailed code examples.",
                "Provide detailed code examples of creating tables in MySQL using [language name].",
                "Write comprehensive examples of inserting, updating, and deleting records in MySQL with [language name].",
                "Show detailed code examples of querying MySQL databases using [language name].",
                "Explain and demonstrate how to handle MySQL database transactions in [language name] with code examples."
            ],
            "PostgreSQL": [
                "Explain and demonstrate how to set up and connect to a PostgreSQL database in [language name] with detailed code examples.",
                "Provide detailed code examples of creating tables in PostgreSQL using [language name].",
                "Write comprehensive examples of inserting, updating, and deleting records in PostgreSQL with [language name].",
                "Show detailed code examples of querying PostgreSQL databases using [language name].",
                "Explain and demonstrate how to handle PostgreSQL database transactions in [language name] with code examples."
            ],
            "MongoDB": [
                "Explain and demonstrate how to set up and connect to a MongoDB database in [language name] with detailed code examples.",
                "Provide detailed code examples of creating collections in MongoDB using [language name].",
                "Write comprehensive examples of inserting, updating, and deleting documents in MongoDB with [language name].",
                "Show detailed code examples of querying MongoDB databases using [language name].",
                "Explain and demonstrate how to handle MongoDB database transactions in [language name] with code examples."
            ],
            "Security": [
                "Provide multiple examples of using encryption and decryption in [language name] with detailed code.",
                "Explain and demonstrate how to work with digital signatures and certificates in [language name] with code examples.",
                "Provide detailed code examples of using secure password storage in [language name].",
                "Show comprehensive examples of using secure socket layer (SSL) and transport layer security (TLS) in [language name] with code.",
                "Write detailed examples of using access control lists (ACLs) in [language name]."
            ],
            "Algorithms and Data Structures": [
                "Explain and demonstrate how to implement a sorting algorithm in [language name] with detailed code examples.",
                "Provide detailed code examples of using a binary search algorithm in [language name].",
                "Show comprehensive examples of implementing a linked list data structure in [language name] with code.",
                "Write detailed examples of using a stack data structure in [language name].",
                "Explain and demonstrate how to implement a queue data structure in [language name] with code examples."
            ],
            "Testing and Debugging": [
                "Provide multiple examples of using unit testing frameworks in [language name] with detailed code.",
                "Explain and demonstrate how to work with test cases in [language name] with code examples.",
                "Provide detailed code examples of using mock objects in [language name].",
                "Show comprehensive examples of using debugging tools in [language name] with code.",
                "Write detailed examples of using logging frameworks in [language name]."
            ],
            "SOLID Principles": [
                "Explain and demonstrate the Single Responsibility Principle with examples in [language name] with detailed code.",
                "Provide detailed code examples demonstrating the Open/Closed Principle in [language name].",
                "Write comprehensive examples of the Liskov Substitution Principle in [language name].",
                "Show detailed code examples of the Interface Segregation Principle in [language name].",
                "Explain and demonstrate the Dependency Inversion Principle with examples in [language name] with code."
            ],
            "MVC Architecture": [
                "Explain and demonstrate the Model-View-Controller (MVC) architecture in [language name] with detailed code examples.",
                "Provide detailed code examples of implementing the Model component in [language name].",
                "Write comprehensive examples of creating the View component in [language name].",
                "Show detailed code examples of the Controller component in [language name].",
                "Explain and demonstrate how to connect the Model, View, and Controller in [language name] with code examples."
            ],
            "Standard Library": [
                "Provide multiple examples of using the standard library in [language name] with detailed code.",
                "Explain and demonstrate how to use common modules in the standard library of [language name] with code examples.",
                "Provide detailed code examples of using file handling functions from the standard library in [language name].",
                "Show comprehensive examples of using data structures from the standard library in [language name] with code.",
                "Write detailed examples of using networking functions from the standard library in [language name]."
            ],
            "Package Managers": [
                "Provide examples of installing packages using [language name] package managers.",
                "Explain how to manage dependencies in [language name] using its package manager.",
                "Show detailed code examples of updating and removing packages with [language name] package managers.",
                "Demonstrate how to configure package repositories in [language name].",
                "Provide best practices for versioning and locking dependencies in [language name] package managers."
            ]
        };
        localStorage.setItem('aiPrompts', JSON.stringify(defaultPrompts));
        return defaultPrompts;
    }
}

// Function to save AI prompts data to localStorage
function saveAIPrompts(prompts) {
    localStorage.setItem('aiPrompts', JSON.stringify(prompts));
}

// Function to iterate over AI prompts using fetchOpenAI
async function iteratePrompts(callback, language) {
    const documentation = getAIPrompts();
    for (const category in documentation) {
        for (const prompt of documentation[category]) {
            const updatedPrompt = prompt.replace('[language name]', language);
            try {
                const result = await fetchOllama('http://localhost:11434/api/generate', 'llama3.1:8b', updatedPrompt);
                await callback(category, result);
            } catch (error) {
                console.error(`Error fetching prompt for category ${category}:`, error);
            }
        }
    }
}

// Function to fetch from Ollama API
async function fetchOllama(endpoint, model_name, prompt, stream = false) {
    try {
        const response = await fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: model_name,
                prompt: prompt,
                stream: stream
            })
        });

        if (response.ok) {
            const data = await response.json();
            const content = data.response;
            console.log(content, '<---- Ollama API');
            return content;
        } else {
            const errorData = await response.json();
            console.error('API error response:', errorData);
            throw new Error(`API request failed with status ${response.status}: ${errorData.error.message}`);
        }
    } catch (error) {
        console.error('Error fetching from Ollama API:', error);
        throw error;
    }
}

// Function to render prompts management UI
function renderPromptsManagement() {
    const prompts = getAIPrompts();
    const selectCategory = document.getElementById('selectCategory');
    const existingPromptsDiv = document.getElementById('existingPrompts');
    const selectionPromptsDiv = document.getElementById('selectionPrompts'); // Reference to selection section

    // Populate category dropdown
    selectCategory.innerHTML = '';
    Object.keys(prompts).forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category;
        selectCategory.appendChild(option);
    });

    // Display existing categories and prompts
    existingPromptsDiv.innerHTML = '<h3>Existing Prompts</h3>';
    selectionPromptsDiv.innerHTML = ''; // Clear previous selection prompts

    Object.keys(prompts).sort().forEach(category => {
        const categoryCard = document.createElement('div');
        categoryCard.className = 'card mb-3';

        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';

        const categoryHeader = document.createElement('h5');
        categoryHeader.textContent = category;
        categoryHeader.className = 'card-title d-flex justify-content-between align-items-center';

        const deleteCategoryBtn = document.createElement('button');
        deleteCategoryBtn.textContent = 'Delete Category';
        deleteCategoryBtn.className = 'btn btn-danger btn-sm';
        deleteCategoryBtn.addEventListener('click', async () => {
            const result = await Swal.fire({
                title: 'Are you sure?',
                text: `Are you sure you want to delete the category "${category}"?`,
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes, delete it!',
                cancelButtonText: 'Cancel'
            });

            if (result.isConfirmed) {
                const updatedPrompts = getAIPrompts();
                delete updatedPrompts[category];
                saveAIPrompts(updatedPrompts);
                Swal.fire('Deleted!', `The category "${category}" has been deleted.`, 'success');
                renderPromptsManagement();
            }
        });

        categoryHeader.appendChild(deleteCategoryBtn);
        cardBody.appendChild(categoryHeader);

        const promptList = document.createElement('ul');
        promptList.className = 'list-group list-group-flush';

        prompts[category].forEach((promptText, index) => {
            const promptItem = document.createElement('li');
            promptItem.className = 'list-group-item d-flex justify-content-between align-items-center';
            promptItem.textContent = promptText;

            const promptActions = document.createElement('div');

            const editBtn = document.createElement('button');
            editBtn.textContent = 'Edit';
            editBtn.className = 'btn btn-warning btn-sm mr-2';
            editBtn.addEventListener('click', async () => {
                const { value: userInput } = await Swal.fire({
                    title: 'Edit Prompt',
                    input: 'text',
                    inputLabel: 'Edit the prompt',
                    inputValue: promptText,
                    showCancelButton: true,
                    inputValidator: (value) => {
                        if (!value.trim()) {
                            return 'Prompt cannot be empty!';
                        }
                    }
                });

                if (userInput) {
                    const updatedPrompts = getAIPrompts();
                    updatedPrompts[category][index] = userInput.trim();
                    saveAIPrompts(updatedPrompts);
                    Swal.fire('Updated!', 'The prompt has been updated.', 'success');
                    renderPromptsManagement();
                }
            });

            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.className = 'btn btn-danger btn-sm';
            deleteBtn.addEventListener('click', async () => {
                const result = await Swal.fire({
                    title: 'Are you sure?',
                    text: 'Are you sure you want to delete this prompt?',
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonText: 'Yes, delete it!',
                    cancelButtonText: 'Cancel'
                });

                if (result.isConfirmed) {
                    const updatedPrompts = getAIPrompts();
                    updatedPrompts[category].splice(index, 1);
                    saveAIPrompts(updatedPrompts);
                    Swal.fire('Deleted!', 'The prompt has been deleted.', 'success');
                    renderPromptsManagement();
                }
            });

            promptActions.appendChild(editBtn);
            promptActions.appendChild(deleteBtn);

            promptItem.appendChild(promptActions);
            promptList.appendChild(promptItem);
        });

        categoryCard.appendChild(cardBody);
        categoryCard.appendChild(promptList);
        existingPromptsDiv.appendChild(categoryCard);

        const selectionCategory = document.createElement('div');
        selectionCategory.className = 'selection-category mb-3';

        const selectionCategoryHeader = document.createElement('h5');
        selectionCategoryHeader.textContent = category;
        selectionCategory.appendChild(selectionCategoryHeader);

        const selectButtonsDiv = document.createElement('div');
        selectButtonsDiv.className = 'mb-2';

        const selectAllBtn = document.createElement('button');
        selectAllBtn.textContent = 'Select All';
        selectAllBtn.className = 'btn btn-secondary btn-sm mr-2';
        selectAllBtn.addEventListener('click', () => {
            selectionCategory.querySelectorAll('input[type=checkbox]').forEach(cb => cb.checked = true);
        });

        const deselectAllBtn = document.createElement('button');
        deselectAllBtn.textContent = 'Deselect All';
        deselectAllBtn.className = 'btn btn-secondary btn-sm';
        deselectAllBtn.addEventListener('click', () => {
            selectionCategory.querySelectorAll('input[type=checkbox]').forEach(cb => cb.checked = false);
        });

        selectButtonsDiv.appendChild(selectAllBtn);
        selectButtonsDiv.appendChild(deselectAllBtn);
        selectionCategory.appendChild(selectButtonsDiv);

        const selectionList = document.createElement('ul');
        selectionList.className = 'list-group list-group-flush';

        prompts[category].forEach((selectionPrompt, selectionIndex) => {
            const selectionPromptItem = document.createElement('li');
            selectionPromptItem.className = 'list-group-item d-flex justify-content-between align-items-center';

            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.id = `select-${category}-${selectionIndex}`;
            checkbox.value = `${category}||${selectionPrompt}`;

            const label = document.createElement('label');
            label.htmlFor = checkbox.id;
            label.textContent = selectionPrompt;
            label.style.marginLeft = '10px';

            const deleteSelectionBtn = document.createElement('button');
            deleteSelectionBtn.textContent = 'Delete';
            deleteSelectionBtn.className = 'btn btn-danger btn-sm ml-2';
            deleteSelectionBtn.addEventListener('click', async () => {
                const result = await Swal.fire({
                    title: 'Are you sure?',
                    text: 'Are you sure you want to delete this prompt?',
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonText: 'Yes, delete it!',
                    cancelButtonText: 'Cancel'
                });

                if (result.isConfirmed) {
                    const updatedPrompts = getAIPrompts();
                    const promptIndex = updatedPrompts[category].indexOf(selectionPrompt);
                    if (promptIndex > -1) {
                        updatedPrompts[category].splice(promptIndex, 1);
                        saveAIPrompts(updatedPrompts);
                        Swal.fire('Deleted!', 'The prompt has been deleted.', 'success');
                        renderPromptsManagement();
                    }
                }
            });

            selectionPromptItem.appendChild(checkbox);
            selectionPromptItem.appendChild(label);
            selectionPromptItem.appendChild(deleteSelectionBtn);
            selectionList.appendChild(selectionPromptItem);
        });

        selectionCategory.appendChild(selectionList);
        selectionPromptsDiv.appendChild(selectionCategory);
    });

    document.getElementById('selectAllBtn').addEventListener('click', () => {
        selectionPromptsDiv.querySelectorAll('input[type=checkbox]').forEach(cb => cb.checked = true);
    });

    document.getElementById('deselectAllBtn').addEventListener('click', () => {
        selectionPromptsDiv.querySelectorAll('input[type=checkbox]').forEach(cb => cb.checked = false);
    });
}

document.getElementById('addCategoryForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const newCategoryName = document.getElementById('newCategoryName').value.trim();
    if (newCategoryName === '') {
        Swal.fire('Error', 'Category name cannot be empty.', 'error');
        return;
    }
    const prompts = getAIPrompts();
    if (prompts[newCategoryName]) {
        Swal.fire('Error', 'Category already exists.', 'error');
        return;
    }
    prompts[newCategoryName] = [];
    saveAIPrompts(prompts);
    document.getElementById('newCategoryName').value = '';
    renderPromptsManagement();
    // Move focus to the new category
    setTimeout(() => {
        const newCategoryHeader = document.querySelector(`#existingPrompts h5:last-of-type`);
        if (newCategoryHeader) {
            newCategoryHeader.focus();
        }
    }, 100);
});

document.getElementById('addPromptForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const selectedCategory = document.getElementById('selectCategory').value;
    const newPrompt = document.getElementById('newPrompt').value.trim();
    if (newPrompt === '') {
        Swal.fire('Error', 'Prompt cannot be empty.', 'error');
        return;
    }
    const prompts = getAIPrompts();
    if (!prompts[selectedCategory]) {
        Swal.fire('Error', 'Selected category does not exist.', 'error');
        return;
    }
    prompts[selectedCategory].push(newPrompt);
    saveAIPrompts(prompts);
    document.getElementById('newPrompt').value = '';
    renderPromptsManagement();
});

document.getElementById('generatePrompts').addEventListener('click', async () => {
    const language = document.getElementById('languageInput').value.trim().toLowerCase();
    const modelSelect = document.getElementById('modelSelect').value;
    let selectedModel = modelSelect;
    if (modelSelect === 'custom') {
        const customModel = document.getElementById('customModelInput').value.trim();
        if (customModel === '') {
            Swal.fire('Error', 'Please enter a custom model name.', 'error');
            return;
        }
        selectedModel = customModel;
    }

    if (language) { // Removed apiKey check
        const aiPromptsSection = document.getElementById('ai-prompts');
        const navigationMenu = document.getElementById('navigationMenu');
        aiPromptsSection.innerHTML = '';
        navigationMenu.innerHTML = '';

        const selectedCheckboxes = document.querySelectorAll('#selectionPrompts input[type=checkbox]:checked');
        let documentation = {};

        selectedCheckboxes.forEach(cb => {
            const [category, prompt] = cb.value.split('||');
            if (!documentation[category]) {
                documentation[category] = [];
            }
            documentation[category].push(prompt);
        });

        if (Object.keys(documentation).length === 0) {
            Swal.fire('Warning', 'Please select at least one prompt to generate.', 'warning');
            return;
        }

        const fullScreenLoader = document.getElementById('fullScreenLoader');
        fullScreenLoader.style.display = 'flex';

        const sortedCategories = Object.keys(documentation).sort();

        for (const category of sortedCategories) {
            const categoryHeader = document.createElement('h2');
            categoryHeader.setAttribute('data-category', category);
            categoryHeader.textContent = category;
            categoryHeader.id = `category-${category.replace(/\s+/g, '-')}`;
            aiPromptsSection.appendChild(categoryHeader);

            const sectionContent = document.createElement('div');
            sectionContent.id = `content-${category.replace(/\s+/g, '-')}`;
            sectionContent.className = 'section-content';

            const sectionLoading = document.createElement('div');
            sectionLoading.className = 'section-loading';
            sectionLoading.innerHTML = '<div class="spinner-border text-primary" role="status"><span class="sr-only">Loading...</span></div>';
            sectionLoading.id = `loading-${category.replace(/\s+/g, '-')}`;

            sectionContent.appendChild(sectionLoading);
            aiPromptsSection.appendChild(sectionContent);

            const navLink = document.createElement('a');
            navLink.href = '#' + categoryHeader.id;
            navLink.textContent = category;
            navLink.className = 'nav-link';
            navigationMenu.appendChild(navLink);
        }

        let index = 0;
        for (const category of sortedCategories) {
            const sectionContent = document.getElementById(`content-${category.replace(/\s+/g, '-')}`);
            const sectionLoading = document.getElementById(`loading-${category.replace(/\s+/g, '-')}`);
            sectionLoading.style.display = 'block';

            for (const prompt of documentation[category]) {
                const promptId = 'prompt-' + index;
                const updatedPrompt = prompt.replace('[language name]', language);

                try {
                    const promptContent = await fetchOllama('http://localhost:11434/api/generate', selectedModel, updatedPrompt);

                    const promptElement = document.createElement('div');
                    promptElement.id = promptId;

                    const pre = document.createElement('pre');
                    const code = document.createElement('code');
                    code.className = 'language-' + language;
                    code.textContent = promptContent;
                    pre.appendChild(code);
                    promptElement.appendChild(pre);

                    const button = document.createElement('button');
                    button.textContent = 'Copy to Clipboard';
                    button.className = 'copy-button btn btn-secondary btn-sm';
                    button.addEventListener('click', () => {
                        navigator.clipboard.writeText(promptContent)
                            .then(() => Swal.fire('Success', 'Copied to clipboard!', 'success'));
                    });
                    promptElement.appendChild(button);

                    sectionContent.appendChild(promptElement);
                    hljs.highlightElement(code);

                    index++;
                } catch (error) {
                    console.error(`Error fetching prompt for category ${category}:`, error);
                    Swal.fire('Error', `Error fetching prompt for category ${category}: ${error.message}`, 'error');
                }
            }
            sectionLoading.style.display = 'none';
        }

        fullScreenLoader.style.display = 'none';

        // Add scroll to top after generation
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

    } else {
        Swal.fire('Error', 'Please enter a programming language.', 'error'); // Removed API key error message
    }
});

document.addEventListener('DOMContentLoaded', () => {
    hljs.highlightAll();

    const themeToggle = document.getElementById('themeToggle');
    const currentTheme = localStorage.getItem('theme') || 'light';

    if (currentTheme === 'dark') {
        document.body.classList.add('dark-mode');
    }

    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        let theme = 'light';
        if (document.body.classList.contains('dark-mode')) {
            theme = 'dark';
        }
        localStorage.setItem('theme', theme);
    });

    const clearBtn = document.getElementById('clearBtn');
    clearBtn.addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById('languageInput').value = '';
        document.getElementById('apiKeyInput').value = '';
        const aiPromptsSection = document.getElementById('ai-prompts');
        aiPromptsSection.innerHTML = '';
        const navigationMenu = document.getElementById('navigationMenu');
        navigationMenu.innerHTML = '';
    });

    const copyAllBtn = document.getElementById('copyAllBtn');
    if (copyAllBtn) {
        copyAllBtn.addEventListener('click', async () => {
            const aiPromptsSection = document.getElementById('ai-prompts');
            if (aiPromptsSection) {
                try {
                    const temp = aiPromptsSection.cloneNode(true);
                    temp.querySelectorAll('.copy-btn, .copy-feedback').forEach(el => el.remove());
                    const textContent = temp.textContent || temp.innerText;
                    await navigator.clipboard.writeText(textContent.trim());

                    copyAllBtn.textContent = 'Copied!';
                    copyAllBtn.disabled = true;
                    setTimeout(() => {
                        copyAllBtn.textContent = 'Copy All Results';
                        copyAllBtn.disabled = false;
                    }, 2000);
                } catch (err) {
                    console.error('Failed to copy:', err);
                    copyAllBtn.textContent = 'Failed to copy';
                    setTimeout(() => {
                        copyAllBtn.textContent = 'Copy All Results';
                    }, 2000);
                }
            }
        });
    }

    document.getElementById('downloadAllBtn').addEventListener('click', () => {
        const language = document.getElementById('languageInput').value.trim();
        const aiPromptsSection = document.getElementById('ai-prompts');
        let content = '';

        const headers = Array.from(aiPromptsSection.querySelectorAll('h2')).sort((a, b) => {
            return a.textContent.localeCompare(b.textContent);
        });

        headers.forEach(header => {
            content += `${header.textContent}\n`;
            const codes = header.nextElementSibling.querySelectorAll('pre code');
            codes.forEach(code => {
                content += `${code.textContent}\n\n`;
            });
        });

        const blob = new Blob([content], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${language}_documentation.md`;
        a.click();
        URL.revokeObjectURL(url);
    });

    renderPromptsManagement();
});

// Ensure buttons are focusable and have accessible names
document.querySelectorAll('button').forEach(button => {
    if (!button.hasAttribute('aria-label')) {
        button.setAttribute('aria-label', button.textContent.trim());
    }
});


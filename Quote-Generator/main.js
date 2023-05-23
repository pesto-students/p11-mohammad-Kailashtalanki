// Cache object
const quoteCache = {};

async function fetchQuotes(topic) {
    const quoteContainer = document.getElementById('quoteContainer');
    quoteContainer.innerHTML = '';

    // Check if the quotes are already cached
    if (quoteCache[topic]) {
        return quoteCache[topic];
    }

    // Display loading animation
    let loadingElement = document.getElementById('loading');
    loadingElement.style.display = 'block';

    try {
        const response = await fetch('https://api.openai.com/v1/engines/davinci/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${document.getElementById('apikey').value}`,
            },
            body: JSON.stringify({
                prompt: `Generate quotes about "${topic}".\n1.`,
                max_tokens: 100,
                temperature: 0.5,
                n: 5,
                stop: ['\n'],
            }),
        });

        if (!response.ok) {
            throw new Error('Error fetching quotes');
        }

        const data = await response.json();

        // Extract the quotes from the API response
        const quotes = data.choices.map((choice) => {
            return { text: choice.text.trim() };
        });

        // Cache the quotes
        quoteCache[topic] = quotes;

        return quotes;
    } catch (error) {
        console.error(error);
    } finally {
        // Hide loading animation.
        loadingElement.style.display = 'none';
    }
}

// Function to handle the search action.
const onSearch = async () => {
    const topic = document.getElementById('topic').value;
    const apiKey = document.getElementById('apikey').value;
    const errorElement = document.getElementById('error');

    // Validate input fields
    if (topic === '' || apiKey === '') {
        errorElement.textContent = 'Please fill in both inputs.';
        return;
    }

    // Clear error message
    errorElement.textContent = '';

    const quoteContainer = document.getElementById('quoteContainer');
    quoteContainer.innerHTML = '';

    if (topic.trim() !== '' && apiKey.trim() !== '') {
        try {
            const quotes = await fetchQuotes(topic);
            const quoteContainer = document.getElementById('quoteContainer');

            // Iterate over the quotes and create quote elements
            quotes.forEach((quote) => {
                const quoteElement = document.createElement('div');
                quoteElement.classList.add('quote');
                quoteElement.textContent = quote.text;
                quoteContainer.appendChild(quoteElement);
            });
        } catch (error) {
            console.log('Error:', error);
        }
    }
}

// Event listener for button click.
document.getElementById('generateBtn').addEventListener('click', async function () {
    onSearch();
});

// Event listener for enter click on input field.
document.getElementById('topic').addEventListener('keypress', async function (event) {
    if (event.key === 'Enter') {
        onSearch()
    }
});
 const button = document.getElementById('toggleButton');
    const content = document.getElementById('content');

    button.addEventListener('click', () => {
    
        
      content.style.display = content.style.display === 'none' ? 'inline' : 'none';
    });
      

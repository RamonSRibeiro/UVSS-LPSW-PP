document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');

    if (form) {
        form.addEventListener('submit', async (event) => {
            event.preventDefault(); 
          
            formStatus.classList.add('hidden');
            formStatus.textContent = '';
            
            const data = new FormData(event.target);
            
            try {
                const response = await fetch(event.target.action, {
                    method: form.method,
                    body: data,
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                if (response.ok) {
                    //Exibe a notificação de sucesso
                    formStatus.textContent = '✅ Mensagem enviada com sucesso! Em breve, entrarei em contato.';
                    formStatus.classList.remove('hidden', 'error');
                    formStatus.classList.add('success');
                    form.reset(); // Limpa o formulário
                } else {
                    const responseData = await response.json();
                    let errorMessage = responseData.error || 'Oops! Ocorreu um erro ao enviar sua mensagem.';
                    
                    //Exibe a notificação de erro
                    formStatus.textContent = `❌ Erro: ${errorMessage}`;
                    formStatus.classList.remove('hidden', 'success');
                    formStatus.classList.add('error');
                }
            } catch (error) {
                //Exibe a notificação de erro
                formStatus.textContent = '❌ Falha na conexão. Por favor, tente novamente mais tarde.';
                formStatus.classList.remove('hidden', 'success');
                formStatus.classList.add('error');
            }
        });
    }
});

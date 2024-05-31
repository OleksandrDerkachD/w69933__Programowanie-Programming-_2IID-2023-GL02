const form = document.getElementById('form');
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const passwordInput = document.getElementById('password');
        const confirmPasswordInput = document.getElementById('confirm-password');
        const nameField = document.querySelector('[name="name"]')
        const nameErrorField = document.createElement('span')
    
        
        form.addEventListener('submit', (event) => {
            event.preventDefault();
    
            if (validateForm()) {
                console.log('Formularz jest poprawny!');
            }
        });
        function validateForm() {
            if (passwordInput.value !== confirmPasswordInput.value) {
                alert('Hasła nie są identyczne.');
                return false;
            }



        return true;
        }

function Car(mark, model, Year){
    this.mark = mark;
    this.model = model;
    this.Year = Year;
    this.speed = 0;
    this.increaceSpeed = (value) =>{
        this.speed += value;
    
    }
}

const car1 = new Car('text', 'text', 2020);
const car2 = new Car('text', 'text', 2000);

car1.increaceSpeed(100);
car2.increaceSpeed(40);
const cars = [car1, car2];
cars.forEach(Element => {
    if(element.Year === 2020){
        console.log(`${element.mark} + ${element.model}`);
    }
})

const avg = cars.reduce((a, car) => a + car.speed, 0)/ cars.length;
console.log(avg);
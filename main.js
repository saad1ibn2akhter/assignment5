
function getIDinfo() {
    const id = event.target.id;
    const ticket = document.getElementById(id);
    // ticket.classList.add('bg-green-300');


    const mainContainer = document.getElementById('item-container');
    const seat = ticket.innerText;
    const price = 550;
    const standardClass = "Economy";

    let ticketCount = document.getElementById('count').innerText;
    let ticketNumber = parseInt(ticketCount);
    ticketNumber = ticketNumber + 1;

    let totalSeat = document.getElementById('total-seat').innerText;
    let totalSeatNumber = parseInt(totalSeat);
    totalSeatNumber = totalSeatNumber - 1;
    
   

    const div = document.createElement('div');
    const h1 = document.createElement('div');
    h1.innerText = seat;
    const p = document.createElement('div'); // Fixed typo here
    p.innerText = price;
    const h2 = document.createElement('div');
    h2.innerText = standardClass;

    const div2 = document.createElement('div');
    div2.innerHTML = 
    `
    <div class = "flex justify-between items-center">
    <div>${seat}</div>
    <div>${standardClass}</div>
    <div>${price}</div>
    </div>

    `;
    
    
    mainContainer.appendChild(div2);

    

    if(ticketNumber <= 4){
        if(ticket.classList.contains('bg-green-300')){
            alert('Sorry !! You cannot buy same ticket twice .');
            mainContainer.removeChild(div2);
            ticketNumber = ticketNumber - 1 ;
            totalSeatNumber = totalSeatNumber + 1;
        }
        ticket.classList.add('bg-green-300');
       
        
    }

    if(ticketNumber === 4){
    
        document.getElementById('apply-button').removeAttribute('disabled');
       
    }
    
    if(ticketNumber === 5)
    {
        alert('Sorry !! You Cannot buy more than 4 tickets at a time.');
        ticketNumber = 4;
        mainContainer.removeChild(div2);
        totalSeatNumber =36;
        if (!ticket.classList.contains('bg-green-300')) {
            ticket.classList.add('bg-gray-100');
        }
        
    }

    const nextButton = document.getElementById('next-button');
    const numberInput = document.getElementById('number-input')
    numberInput.addEventListener('keyup',function(event){
        const text = event.target.value;
        if(text.length >= 1 && ticketNumber >= 1){
            nextButton.removeAttribute('disabled');
        }
        else{
            nextButton.setAttribute('disabled');
        }
    });
    
   
    const ticketPrice = ticketNumber*550;
    
    document.getElementById('total-price').innerText = ticketPrice;
    document.getElementById('grand-total').innerText = ticketPrice ;
    document.getElementById('count').innerText = ticketNumber;
    document.getElementById('total-seat').innerText = totalSeatNumber;
    
    console.log(event);
}

var scrollToTopButton = document.getElementById("scrollToTopButton");
scrollToTopButton.addEventListener("click", function() {
    window.scrollTo({
        top:1200,
        behavior: "smooth"
    });
});

const btn = document.getElementById('apply-button');
btn.addEventListener("click",function(){
    const couponElement = document.getElementById('coupon-input').value;
    console.log(couponElement);

    if(couponElement === "NEW15"){
        document.getElementById('grand-total').innerText = "1870";
        document.getElementById('apply-button').setAttribute('disabled' ,true);
        document.getElementById('coupon-input').value ="";
        document.getElementById('coupon-input').style.display = 'none';
        document.getElementById('apply-button').style.display = 'none';
    }
    else if(couponElement === "Couple 20"){
        document.getElementById('grand-total').innerText = "1760";
        document.getElementById('apply-button').setAttribute('disabled',true);
        document.getElementById('coupon-input').value ="";
        document.getElementById('coupon-input').style.display = 'none';
        document.getElementById('apply-button').style.display = 'none';
    }
    else{
        alert('invaid coupon code given !!');
        document.getElementById('coupon-input').value ="";
    }
    

    
});

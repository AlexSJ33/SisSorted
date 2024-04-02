import "./Sorted.css"

import { useState } from "react"


function Sorted() {
    const [numbers, setNumbers] = useState(0);

    function handleClick() {
        alert('Press Gostoso')
    }


  return (
    <>
    <div className='flex-container'>
        <div className="flex-item1">
            
            <div class="numbers">1</div>
            <div class="numbers">2</div>
            <div class="numbers">3</div>
            <div class="numbers">4</div>
            <div class="numbers">5</div>
            <div class="numbers">6</div>
            <div class="numbers">7</div>
            <div class="numbers">8</div>
            <div class="numbers">9</div>
            <div class="numbers">10</div>
            
            <div class="numbers">11</div>
            <div class="numbers">12</div>
            <div class="numbers">13</div>
            <div class="numbers">14</div>
            <div class="numbers">15</div>
            <div class="numbers">16</div>
            <div class="numbers">17</div>
            <div class="numbers">18</div>
            <div class="numbers">19</div>
            <div class="numbers">20</div>

            <div class="numbers">21</div>
            <div class="numbers">22</div>
            <div class="numbers">23</div>
            <div class="numbers">24</div>
            <div class="numbers">25</div>
            <div class="numbers">26</div>
            <div class="numbers">27</div>
            <div class="numbers">28</div>
            <div class="numbers">29</div>
            <div class="numbers">30</div>

            <div class="numbers">31</div>
            <div class="numbers">32</div>
            <div class="numbers">33</div>
            <div class="numbers">34</div>
            <div class="numbers">35</div>
            <div class="numbers">36</div>
            <div class="numbers">37</div>
            <div class="numbers">38</div>
            <div class="numbers">39</div>
            <div class="numbers">40</div>

            <div class="numbers">41</div>
            <div class="numbers">42</div>
            <div class="numbers">43</div>
            <div class="numbers">44</div>
            <div class="numbers">45</div>
            <div class="numbers">46</div>
            <div class="numbers">47</div>
            <div class="numbers">48</div>
            <div class="numbers">49</div>
            <div class="numbers">50</div>


        </div>
        <div className="flex-item2">
            <button className="comprarFichas">Comprar Fichas</button>
            <span>Fichas: 0</span>
            <button className="sortear" onClick={handleClick}>Sortear</button>
        </div>
        <hr />
        <div className="flex-item3">
            <h2>Números Sorteados:</h2>
            <table>
                <tr>
                    <th>Hora</th>
                    <th>Nº</th>
                    
                </tr>
                <tr>
                    <td>17:40</td>
                    <td>19</td>
                    
                </tr>
                <tr>
                    <td>17:40</td>
                    <td>22</td>
                    
                </tr>
                <tr>
                    <td>17:40</td>
                    <td>47</td>
                    
                </tr>
            </table>            
        </div>
    </div>
    </>
  )
}

export default Sorted
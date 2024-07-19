import './Activity.css';
import MainNews from './MainNews/MainNews';
import SmallNews from './SmallNews/SmallNews'

export default function Activity() {
    return (
        <div>
            <div class="tabs">
  <input name="tabs" type="radio" id="tab-1" checked="checked" class="input"/>
  <label for="tab-1" class="label">Новости</label>
  <div class="panel">
  <div className='Activity'>
            <MainNews />
            <SmallNews />
        </div>
  </div>

  <input name="tabs" type="radio" id="tab-2" class="input"/>
  <label for="tab-2" class="label">События</label>
  <div class="panel">
    <h1>Раздел с События</h1>
  </div>

  <input name="tabs" type="radio" id="tab-3" class="input"/>
  <label for="tab-3" class="label">Поздравления</label>
  <div class="panel">
    <h1>Раздел с Поздравления</h1>
  </div>

  <input name="tabs" type="radio" id="tab-4" class="input"/>
  <label for="tab-4" class="label">Новости подразделений</label>
  <div class="panel">
    <h1>Раздел с Новости подразделений</h1>
  </div>
</div>
</div>
    )
}
import { useState } from 'react'
import { pick } from '../../lib/random'
import NewButton from '../NewButton'
import t from '../tool.module.css'
import { STORY } from './story'

const draw = () => ({
  wer: pick(STORY.wer),
  wo: pick(STORY.wo),
  was: pick(STORY.was),
})

export default function StoryTool() {
  const [s, setStory] = useState(draw)
  return (
    <>
      <div className={t.three}>
        <div>
          <small>Wer?</small>
          {s.wer}
        </div>
        <div>
          <small>Wo?</small>
          {s.wo}
        </div>
        <div>
          <small>Was passiert?</small>… {s.was}
        </div>
      </div>
      <NewButton label="Neu würfeln" onNew={() => setStory(draw())} />
    </>
  )
}

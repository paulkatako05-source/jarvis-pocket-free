'use strict';
$('power').onclick=()=>{state.on=!state.on;if(!state.on){pause();if(window.jarvisStopVoice)window.jarvisStopVoice();$('searchLink').classList.add('hidden');say('Jarvis is off. Timer and voice stopped; your data stays saved.')}else say('Jarvis is on. Try help for everyday commands.');save();powerUI()};

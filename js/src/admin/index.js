import app from 'flarum/app';
import OnlineSettingsModal from './components/OnlineSettingsModal';


app.initializers.add('kvothe-online-users', () => {
  app.extensionSettings['kvothe-online-users'] = () => app.modal.show(new OnlineSettingsModal());
});

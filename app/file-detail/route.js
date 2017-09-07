import Ember from 'ember';

export default Ember.Route.extend({
    model(params) {
        return this.store.findRecord('file', params.file_id).
               then(file => file.get('user').
                       then(() => file));    
    }
});

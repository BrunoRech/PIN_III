const { UserSearch } = require('../../app/models/UserSearch');

module.exports = {
    clearHistory() {
        try {
            
        } catch (error) {
            return res.status(500).json({ error: error.message })
        }
    },

    getLatestSearch() {
        try {

        } catch (error) {
            return res.status(500).json({ error: error.message })
        }
    },

    search() {
        try {

        } catch (error) {
            return res.status(500).json({ error: error.message })
        }
    }
}
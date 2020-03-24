# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Prayer.destroy_all

dave = User.create(username: 'Dave', verse: 'password')
mary = User.create(username: 'Mary', verse: 'password')
omar = User.create(username: 'Omar', verse: 'password')

Prayer.create(title: 'My mom has cancer', body: 'Lord, please heal her.', amens: 1, outcome: "", user: omar)
Prayer.create(title: "I am going to propose to my girlfriend.", body: 'God, please make her my wife.', amens: 0, outcome: 'She said yes!', user: omar)
Prayer.create(title: 'Election 2020', body: 'I sure would appreciate a shake-up of some sort.', amens: 0, outcome: "", user: mary)
Prayer.create(title: 'Graduation', body: 'Father God, please help me to achieve it.', outcome: "", amens: 0, user: dave)

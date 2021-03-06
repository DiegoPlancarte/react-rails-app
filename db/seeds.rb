3.times do |user|
  User.create!(
    email: "test#{user}@email.com",
    password: "123456",
    password_confirmation: "123456",
    first_name: "Test#{user}",
    last_name: "User",
    username: "TestUser#{user}"
  )
end

puts "3 users created"

10.times do |blog|
  Blog.create!(
    title: "My Blog Post #{blog}",
    body: "Well, the way they make shows is, they make one show. That show's called a pilot. Then they show that show to the people who make shows, and on the strength of that one show they decide if they're going to make more shows. Some pilots get picked and become television programs. Some don't, become nothing. She starred in one of the ones that became nothing.",
    user_id: rand(1..3)
  )
end

puts "10 projects created"

10.times do |project|
  Project.create!(
    title: "My Project #{project}",
    description: "Well, the way they make shows is, they make one show. That show's called a pilot. Then they show that show to the people who make shows, and on the strength of that one show they decide if they're going to make more shows. Some pilots get picked and become television programs. Some don't, become nothing. She starred in one of the ones that became nothing.",
    position: "#{project}",
    user_id: rand(1..3)
  )
end

puts "10 blog posts created"

FavoriteBlog.create!(
  fav_blogs: '1, 2, 3',
  user_id: 1
)

FavoriteBlog.create!(
  fav_blogs: '1, 2, 3, 4, 5, 6, 7, 8, 9',
  user_id: 2
)

FavoriteBlog.create!(
  fav_blogs: '5, 6, 1',
  user_id: 3
)

puts "3 favorite blog list created"
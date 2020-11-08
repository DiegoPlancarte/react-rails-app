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

puts "10 blog posts created"
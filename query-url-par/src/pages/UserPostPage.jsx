export function UserPostsPage() {
  const socialMediaPosts = [
    "Embracing the weekend vibes! 😎 What's everyone up to? #WeekendFun #ChillMode",
    "Just tried a new recipe and nailed it! 🍲 Who else loves experimenting in the kitchen? #FoodieAdventures #HomeCooking",
    "Feeling grateful for the little things in life. What's something that made you smile today? #Gratitude #PositiveVibes",
    "Just finished an amazing book! 📚 Any recommendations for my next read? #BookLovers #ReadingChallenge",
    "Hiking trails and good company – the perfect Saturday! 🌲 #NatureLovers #OutdoorAdventure",
    "Coffee in hand, ready to conquer the day! ☕️ What's your go-to morning routine? #Productivity #MorningMotivation",
    "Throwback to unforgettable moments with friends. Tag your squad! 👫👭 #Memories #FriendshipGoals",
    "Exploring new places and making memories. 🌍 Share your favorite travel destination! #TravelBug #Wanderlust",
    "Sunday relaxation mode: Netflix and chill. 🍿 What's your current binge-worthy series? #LazySunday #NetflixAndChill",
    "Motivation Monday: Set goals, crush them, repeat. 💪 What's on your to-do list this week? #MondayMotivation #GoalSetting",
    "Appreciating the beauty of a sunset. 🌅 Share your favorite sunset photo! #SunsetViews #NaturePhotography",
    "Spreading kindness and positivity. 💖 Tag someone who brightens your day! #KindnessMatters #SpreadLove",
    "Midweek blues? Treat yourself to something you love! 🛍️ What's your guilty pleasure? #SelfCare #TreatYourself",
    "Reflecting on the journey so far. What's a lesson you've learned recently? 🌟 #LifeLessons #PersonalGrowth",
    "Dance like nobody's watching! 💃 Share your favorite dance move in the comments! #DanceParty #FunTimes",
  ];

  return (
    <>
      <h3>posts</h3>
      <ul>
        {socialMediaPosts.map((post) => {
          return <li>{post}</li>;
        })}
      </ul>
    </>
  );
}

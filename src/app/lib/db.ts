interface Post {
  id: string;
  user: string;
  caption: string;
  image: string;
  likes: number;
}

export default function getSavedPosts() {
  const savedPosts = [
    {
      id: "V8w0gSmxajY",
      slug: "a-person-swimming-in-the-ocean-with-a-mask-on-V8w0gSmxajY",
      created_at: "2023-04-28T13:21:00Z",
      updated_at: "2024-01-27T19:54:35Z",
      promoted_at: "2023-08-01T19:16:01Z",
      width: 8256,
      height: 5504,
      color: "#0c598c",
      blur_hash: "L$E:=4x^M{R,?w%LM|R,-nn$R*j[",
      description:
        "Home to kaleidoscopic-colored coral reefs and an abundance of diverse marine life | Islands of NEOM- NEOM, Saudi Arabia",
      alt_description: "a person swimming in the ocean with a mask on",
      breadcrumbs: [],
      urls: {
        raw: "https://images.unsplash.com/photo-1682687982185-531d09ec56fc?ixid=M3w1NTk3ODZ8MXwxfGFsbHwxfHx8fHx8Mnx8MTcwNjQ3MDM1Mnw&ixlib=rb-4.0.3",
        full: "https://images.unsplash.com/photo-1682687982185-531d09ec56fc?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1NTk3ODZ8MXwxfGFsbHwxfHx8fHx8Mnx8MTcwNjQ3MDM1Mnw&ixlib=rb-4.0.3&q=85",
        regular:
          "https://images.unsplash.com/photo-1682687982185-531d09ec56fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NTk3ODZ8MXwxfGFsbHwxfHx8fHx8Mnx8MTcwNjQ3MDM1Mnw&ixlib=rb-4.0.3&q=80&w=1080",
        small:
          "https://images.unsplash.com/photo-1682687982185-531d09ec56fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NTk3ODZ8MXwxfGFsbHwxfHx8fHx8Mnx8MTcwNjQ3MDM1Mnw&ixlib=rb-4.0.3&q=80&w=400",
        thumb:
          "https://images.unsplash.com/photo-1682687982185-531d09ec56fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NTk3ODZ8MXwxfGFsbHwxfHx8fHx8Mnx8MTcwNjQ3MDM1Mnw&ixlib=rb-4.0.3&q=80&w=200",
        small_s3:
          "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1682687982185-531d09ec56fc",
      },
      links: {
        self: "https://api.unsplash.com/photos/a-person-swimming-in-the-ocean-with-a-mask-on-V8w0gSmxajY",
        html: "https://unsplash.com/photos/a-person-swimming-in-the-ocean-with-a-mask-on-V8w0gSmxajY",
        download:
          "https://unsplash.com/photos/V8w0gSmxajY/download?ixid=M3w1NTk3ODZ8MXwxfGFsbHwxfHx8fHx8Mnx8MTcwNjQ3MDM1Mnw",
        download_location:
          "https://api.unsplash.com/photos/V8w0gSmxajY/download?ixid=M3w1NTk3ODZ8MXwxfGFsbHwxfHx8fHx8Mnx8MTcwNjQ3MDM1Mnw",
      },
      likes: 175,
      liked_by_user: false,
      current_user_collections: [],
      sponsorship: {
        impression_urls: [Array],
        tagline: "Made to Change",
        tagline_url:
          "https://www.neom.com/en-us?utm_source=unsplash&utm_medium=referral",
        sponsor: [Object],
      },
      topic_submissions: { blue: [Object] },
      user: {
        id: "mYizSrdJkkU",
        updated_at: "2024-01-28T18:47:28Z",
        username: "neom",
        name: "NEOM",
        first_name: "NEOM",
        last_name: null,
        twitter_username: "neom",
        portfolio_url: "http://www.neom.com",
        bio: "Located in the northwest of Saudi Arabia, NEOM’s diverse climate offers both sun-soaked beaches and snow-capped mountains. NEOM’s unique location will provide residents with enhanced livability while protecting 95% of the natural landscape.",
        location: "NEOM, Saudi Arabia",
        links: [Object],
        profile_image: [Object],
        instagram_username: "discoverneom",
        total_collections: 7,
        total_likes: 1,
        total_photos: 202,
        total_promoted_photos: 72,
        accepted_tos: true,
        for_hire: false,
        social: [Object],
      },
    },
    {
      id: "b6LQ3AQEcFc",
      slug: "an-aerial-view-of-a-beach-with-two-surfboards-b6LQ3AQEcFc",
      created_at: "2024-01-28T13:49:38Z",
      updated_at: "2024-01-28T19:11:52Z",
      promoted_at: "2024-01-28T19:09:04Z",
      width: 6000,
      height: 4000,
      color: "#262626",
      blur_hash: "L255B?t6MyE34;jYW;xZjFNHxZWE",
      description: null,
      alt_description: "an aerial view of a beach with two surfboards",
      breadcrumbs: [],
      urls: {
        raw: "https://images.unsplash.com/photo-1706449511874-6a0ca25fa750?ixid=M3w1NTk3ODZ8MHwxfGFsbHwyfHx8fHx8Mnx8MTcwNjQ3MDM1Mnw&ixlib=rb-4.0.3",
        full: "https://images.unsplash.com/photo-1706449511874-6a0ca25fa750?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1NTk3ODZ8MHwxfGFsbHwyfHx8fHx8Mnx8MTcwNjQ3MDM1Mnw&ixlib=rb-4.0.3&q=85",
        regular:
          "https://images.unsplash.com/photo-1706449511874-6a0ca25fa750?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NTk3ODZ8MHwxfGFsbHwyfHx8fHx8Mnx8MTcwNjQ3MDM1Mnw&ixlib=rb-4.0.3&q=80&w=1080",
        small:
          "https://images.unsplash.com/photo-1706449511874-6a0ca25fa750?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NTk3ODZ8MHwxfGFsbHwyfHx8fHx8Mnx8MTcwNjQ3MDM1Mnw&ixlib=rb-4.0.3&q=80&w=400",
        thumb:
          "https://images.unsplash.com/photo-1706449511874-6a0ca25fa750?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NTk3ODZ8MHwxfGFsbHwyfHx8fHx8Mnx8MTcwNjQ3MDM1Mnw&ixlib=rb-4.0.3&q=80&w=200",
        small_s3:
          "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1706449511874-6a0ca25fa750",
      },
      links: {
        self: "https://api.unsplash.com/photos/an-aerial-view-of-a-beach-with-two-surfboards-b6LQ3AQEcFc",
        html: "https://unsplash.com/photos/an-aerial-view-of-a-beach-with-two-surfboards-b6LQ3AQEcFc",
        download:
          "https://unsplash.com/photos/b6LQ3AQEcFc/download?ixid=M3w1NTk3ODZ8MHwxfGFsbHwyfHx8fHx8Mnx8MTcwNjQ3MDM1Mnw",
        download_location:
          "https://api.unsplash.com/photos/b6LQ3AQEcFc/download?ixid=M3w1NTk3ODZ8MHwxfGFsbHwyfHx8fHx8Mnx8MTcwNjQ3MDM1Mnw",
      },
      likes: 2,
      liked_by_user: false,
      current_user_collections: [],
      sponsorship: null,
      topic_submissions: {},
      user: {
        id: "khtnjqjzcq0",
        updated_at: "2024-01-28T19:09:20Z",
        username: "mitchorr",
        name: "Mitchell Orr",
        first_name: "Mitchell",
        last_name: "Orr",
        twitter_username: null,
        portfolio_url: "https://mitchorr.darkroom.tech/",
        bio:
          "If you feel you would like to support my work, any donations no matter how small, would be extremely helpful. \r\n" +
          "Thanks for looking!",
        location: "Wirral",
        links: [Object],
        profile_image: [Object],
        instagram_username: "mitchorr1",
        total_collections: 0,
        total_likes: 41,
        total_photos: 357,
        total_promoted_photos: 114,
        accepted_tos: true,
        for_hire: true,
        social: [Object],
      },
    },
    {
      id: "vZQmxQ7xqrI",
      slug: "a-very-tall-waterfall-in-the-middle-of-a-forest-vZQmxQ7xqrI",
      created_at: "2024-01-27T00:00:51Z",
      updated_at: "2024-01-28T19:03:16Z",
      promoted_at: "2024-01-28T19:03:16Z",
      width: 8192,
      height: 5464,
      color: "#f3f3f3",
      blur_hash: "LpD,4ZofIAt7~qofM{t7?bj]Rjof",
      description: null,
      alt_description: "a very tall waterfall in the middle of a forest",
      breadcrumbs: [],
      urls: {
        raw: "https://images.unsplash.com/photo-1706313296876-ba53e6c1670b?ixid=M3w1NTk3ODZ8MHwxfGFsbHwzfHx8fHx8Mnx8MTcwNjQ3MDM1Mnw&ixlib=rb-4.0.3",
        full: "https://images.unsplash.com/photo-1706313296876-ba53e6c1670b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1NTk3ODZ8MHwxfGFsbHwzfHx8fHx8Mnx8MTcwNjQ3MDM1Mnw&ixlib=rb-4.0.3&q=85",
        regular:
          "https://images.unsplash.com/photo-1706313296876-ba53e6c1670b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NTk3ODZ8MHwxfGFsbHwzfHx8fHx8Mnx8MTcwNjQ3MDM1Mnw&ixlib=rb-4.0.3&q=80&w=1080",
        small:
          "https://images.unsplash.com/photo-1706313296876-ba53e6c1670b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NTk3ODZ8MHwxfGFsbHwzfHx8fHx8Mnx8MTcwNjQ3MDM1Mnw&ixlib=rb-4.0.3&q=80&w=400",
        thumb:
          "https://images.unsplash.com/photo-1706313296876-ba53e6c1670b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NTk3ODZ8MHwxfGFsbHwzfHx8fHx8Mnx8MTcwNjQ3MDM1Mnw&ixlib=rb-4.0.3&q=80&w=200",
        small_s3:
          "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1706313296876-ba53e6c1670b",
      },
      links: {
        self: "https://api.unsplash.com/photos/a-very-tall-waterfall-in-the-middle-of-a-forest-vZQmxQ7xqrI",
        html: "https://unsplash.com/photos/a-very-tall-waterfall-in-the-middle-of-a-forest-vZQmxQ7xqrI",
        download:
          "https://unsplash.com/photos/vZQmxQ7xqrI/download?ixid=M3w1NTk3ODZ8MHwxfGFsbHwzfHx8fHx8Mnx8MTcwNjQ3MDM1Mnw",
        download_location:
          "https://api.unsplash.com/photos/vZQmxQ7xqrI/download?ixid=M3w1NTk3ODZ8MHwxfGFsbHwzfHx8fHx8Mnx8MTcwNjQ3MDM1Mnw",
      },
      likes: 1,
      liked_by_user: false,
      current_user_collections: [],
      sponsorship: null,
      topic_submissions: {},
      user: {
        id: "SJ2_XzVF3D0",
        updated_at: "2024-01-28T19:07:23Z",
        username: "ericmuhr",
        name: "Eric Muhr",
        first_name: "Eric",
        last_name: "Muhr",
        twitter_username: "ericmuhr",
        portfolio_url: "https://linktr.ee/ericmuhr",
        bio: "PNW fine art photography | he/him | Prints and originals available | Founder of @oregonexplored",
        location: "Portland, OR ",
        links: [Object],
        profile_image: [Object],
        instagram_username: "ericmuhr",
        total_collections: 15,
        total_likes: 1587,
        total_photos: 404,
        total_promoted_photos: 224,
        accepted_tos: true,
        for_hire: true,
        social: [Object],
      },
    },
    {
      id: "8-Fl1mFcFfQ",
      slug: "a-room-filled-with-lots-of-green-plants-8-Fl1mFcFfQ",
      created_at: "2024-01-28T18:58:10Z",
      updated_at: "2024-01-28T19:02:36Z",
      promoted_at: "2024-01-28T18:59:35Z",
      width: 3325,
      height: 4988,
      color: "#c0c0c0",
      blur_hash: "LUHV9fIBD*t7~Ws:IoozNaxus:jG",
      description: null,
      alt_description: "a room filled with lots of green plants",
      breadcrumbs: [],
      urls: {
        raw: "https://images.unsplash.com/photo-1706468237584-dbdb1ddfe4a1?ixid=M3w1NTk3ODZ8MHwxfGFsbHw0fHx8fHx8Mnx8MTcwNjQ3MDM1Mnw&ixlib=rb-4.0.3",
        full: "https://images.unsplash.com/photo-1706468237584-dbdb1ddfe4a1?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1NTk3ODZ8MHwxfGFsbHw0fHx8fHx8Mnx8MTcwNjQ3MDM1Mnw&ixlib=rb-4.0.3&q=85",
        regular:
          "https://images.unsplash.com/photo-1706468237584-dbdb1ddfe4a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NTk3ODZ8MHwxfGFsbHw0fHx8fHx8Mnx8MTcwNjQ3MDM1Mnw&ixlib=rb-4.0.3&q=80&w=1080",
        small:
          "https://images.unsplash.com/photo-1706468237584-dbdb1ddfe4a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NTk3ODZ8MHwxfGFsbHw0fHx8fHx8Mnx8MTcwNjQ3MDM1Mnw&ixlib=rb-4.0.3&q=80&w=400",
        thumb:
          "https://images.unsplash.com/photo-1706468237584-dbdb1ddfe4a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NTk3ODZ8MHwxfGFsbHw0fHx8fHx8Mnx8MTcwNjQ3MDM1Mnw&ixlib=rb-4.0.3&q=80&w=200",
        small_s3:
          "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1706468237584-dbdb1ddfe4a1",
      },
      links: {
        self: "https://api.unsplash.com/photos/a-room-filled-with-lots-of-green-plants-8-Fl1mFcFfQ",
        html: "https://unsplash.com/photos/a-room-filled-with-lots-of-green-plants-8-Fl1mFcFfQ",
        download:
          "https://unsplash.com/photos/8-Fl1mFcFfQ/download?ixid=M3w1NTk3ODZ8MHwxfGFsbHw0fHx8fHx8Mnx8MTcwNjQ3MDM1Mnw",
        download_location:
          "https://api.unsplash.com/photos/8-Fl1mFcFfQ/download?ixid=M3w1NTk3ODZ8MHwxfGFsbHw0fHx8fHx8Mnx8MTcwNjQ3MDM1Mnw",
      },
      likes: 5,
      liked_by_user: false,
      current_user_collections: [],
      sponsorship: null,
      topic_submissions: {},
      user: {
        id: "CpBDVgrthTM",
        updated_at: "2024-01-28T19:02:23Z",
        username: "ninjason",
        name: "Jason Leung",
        first_name: "Jason",
        last_name: "Leung",
        twitter_username: null,
        portfolio_url: "https://jasonleung.co",
        bio:
          "Shooting with Canon R5/R6.\r\n" +
          "This is my way of giving back,  keep up with what I photograph on Instagram @xninjason",
        location: "Bay Area, California",
        links: [Object],
        profile_image: [Object],
        instagram_username: "xninjason",
        total_collections: 3,
        total_likes: 0,
        total_photos: 8508,
        total_promoted_photos: 774,
        accepted_tos: true,
        for_hire: true,
        social: [Object],
      },
    },
    {
      id: "l2rCjSLgBPw",
      slug: "the-aurora-lights-shine-brightly-over-a-mountain-and-a-body-of-water-l2rCjSLgBPw",
      created_at: "2024-01-27T21:49:10Z",
      updated_at: "2024-01-28T19:16:12Z",
      promoted_at: "2024-01-28T18:57:34Z",
      width: 8101,
      height: 5401,
      color: "#262626",
      blur_hash: "LA8qEB%M9GWA~Xt8E1j?9JM|obt7",
      description: "Aurora Borealis above Gásadalur",
      alt_description:
        "the aurora lights shine brightly over a mountain and a body of water",
      breadcrumbs: [],
      urls: {
        raw: "https://images.unsplash.com/photo-1706391989349-7882ece26c0c?ixid=M3w1NTk3ODZ8MHwxfGFsbHw1fHx8fHx8Mnx8MTcwNjQ3MDM1Mnw&ixlib=rb-4.0.3",
        full: "https://images.unsplash.com/photo-1706391989349-7882ece26c0c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1NTk3ODZ8MHwxfGFsbHw1fHx8fHx8Mnx8MTcwNjQ3MDM1Mnw&ixlib=rb-4.0.3&q=85",
        regular:
          "https://images.unsplash.com/photo-1706391989349-7882ece26c0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NTk3ODZ8MHwxfGFsbHw1fHx8fHx8Mnx8MTcwNjQ3MDM1Mnw&ixlib=rb-4.0.3&q=80&w=1080",
        small:
          "https://images.unsplash.com/photo-1706391989349-7882ece26c0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NTk3ODZ8MHwxfGFsbHw1fHx8fHx8Mnx8MTcwNjQ3MDM1Mnw&ixlib=rb-4.0.3&q=80&w=400",
        thumb:
          "https://images.unsplash.com/photo-1706391989349-7882ece26c0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NTk3ODZ8MHwxfGFsbHw1fHx8fHx8Mnx8MTcwNjQ3MDM1Mnw&ixlib=rb-4.0.3&q=80&w=200",
        small_s3:
          "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1706391989349-7882ece26c0c",
      },
      links: {
        self: "https://api.unsplash.com/photos/the-aurora-lights-shine-brightly-over-a-mountain-and-a-body-of-water-l2rCjSLgBPw",
        html: "https://unsplash.com/photos/the-aurora-lights-shine-brightly-over-a-mountain-and-a-body-of-water-l2rCjSLgBPw",
        download:
          "https://unsplash.com/photos/l2rCjSLgBPw/download?ixid=M3w1NTk3ODZ8MHwxfGFsbHw1fHx8fHx8Mnx8MTcwNjQ3MDM1Mnw",
        download_location:
          "https://api.unsplash.com/photos/l2rCjSLgBPw/download?ixid=M3w1NTk3ODZ8MHwxfGFsbHw1fHx8fHx8Mnx8MTcwNjQ3MDM1Mnw",
      },
      likes: 2,
      liked_by_user: false,
      current_user_collections: [],
      sponsorship: null,
      topic_submissions: {},
      user: {
        id: "oK4acxIDEtk",
        updated_at: "2024-01-28T19:02:23Z",
        username: "joshuakettle",
        name: "Joshua Kettle",
        first_name: "Joshua Kettle",
        last_name: null,
        twitter_username: null,
        portfolio_url: "https://joshuakettle.com",
        bio: "hi, I'm a travel and landscape photographer from Germany",
        location: "Germany",
        links: [Object],
        profile_image: [Object],
        instagram_username: "joshuakettle.photography",
        total_collections: 20,
        total_likes: 134,
        total_photos: 693,
        total_promoted_photos: 122,
        accepted_tos: true,
        for_hire: true,
        social: [Object],
      },
    },
    {
      id: "s0A8sa9oasY",
      slug: "a-person-standing-in-the-middle-of-a-cave-s0A8sa9oasY",
      created_at: "2023-04-28T12:59:36Z",
      updated_at: "2024-01-27T22:50:38Z",
      promoted_at: null,
      width: 5472,
      height: 3648,
      color: "#f3f3f3",
      blur_hash: "LfB:jRj[01WBNHj[s:WBRjf6t7j[",
      description:
        "Amongst expansive red sands and spectacular sandstone rock formations, Hisma Desert – NEOM, Saudi Arabia | The NEOM Nature Reserve region is being designed to deliver protection and restoration of biodiversity across 95% of NEOM.",
      alt_description: "a person standing in the middle of a cave",
      breadcrumbs: [],
      urls: {
        raw: "https://images.unsplash.com/photo-1682686578289-cf9c8c472c9b?ixid=M3w1NTk3ODZ8MXwxfGFsbHw2fHx8fHx8Mnx8MTcwNjQ3MDM1Mnw&ixlib=rb-4.0.3",
        full: "https://images.unsplash.com/photo-1682686578289-cf9c8c472c9b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1NTk3ODZ8MXwxfGFsbHw2fHx8fHx8Mnx8MTcwNjQ3MDM1Mnw&ixlib=rb-4.0.3&q=85",
        regular:
          "https://images.unsplash.com/photo-1682686578289-cf9c8c472c9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NTk3ODZ8MXwxfGFsbHw2fHx8fHx8Mnx8MTcwNjQ3MDM1Mnw&ixlib=rb-4.0.3&q=80&w=1080",
        small:
          "https://images.unsplash.com/photo-1682686578289-cf9c8c472c9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NTk3ODZ8MXwxfGFsbHw2fHx8fHx8Mnx8MTcwNjQ3MDM1Mnw&ixlib=rb-4.0.3&q=80&w=400",
        thumb:
          "https://images.unsplash.com/photo-1682686578289-cf9c8c472c9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NTk3ODZ8MXwxfGFsbHw2fHx8fHx8Mnx8MTcwNjQ3MDM1Mnw&ixlib=rb-4.0.3&q=80&w=200",
        small_s3:
          "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1682686578289-cf9c8c472c9b",
      },
      links: {
        self: "https://api.unsplash.com/photos/a-person-standing-in-the-middle-of-a-cave-s0A8sa9oasY",
        html: "https://unsplash.com/photos/a-person-standing-in-the-middle-of-a-cave-s0A8sa9oasY",
        download:
          "https://unsplash.com/photos/s0A8sa9oasY/download?ixid=M3w1NTk3ODZ8MXwxfGFsbHw2fHx8fHx8Mnx8MTcwNjQ3MDM1Mnw",
        download_location:
          "https://api.unsplash.com/photos/s0A8sa9oasY/download?ixid=M3w1NTk3ODZ8MXwxfGFsbHw2fHx8fHx8Mnx8MTcwNjQ3MDM1Mnw",
      },
      likes: 567,
      liked_by_user: false,
      current_user_collections: [],
      sponsorship: {
        impression_urls: [Array],
        tagline: "Made to Change",
        tagline_url:
          "https://www.neom.com/en-us?utm_source=unsplash&utm_medium=referral",
        sponsor: [Object],
      },
      topic_submissions: { travel: [Object] },
      user: {
        id: "mYizSrdJkkU",
        updated_at: "2024-01-28T18:47:28Z",
        username: "neom",
        name: "NEOM",
        first_name: "NEOM",
        last_name: null,
        twitter_username: "neom",
        portfolio_url: "http://www.neom.com",
        bio: "Located in the northwest of Saudi Arabia, NEOM’s diverse climate offers both sun-soaked beaches and snow-capped mountains. NEOM’s unique location will provide residents with enhanced livability while protecting 95% of the natural landscape.",
        location: "NEOM, Saudi Arabia",
        links: [Object],
        profile_image: [Object],
        instagram_username: "discoverneom",
        total_collections: 7,
        total_likes: 1,
        total_photos: 202,
        total_promoted_photos: 72,
        accepted_tos: true,
        for_hire: false,
        social: [Object],
      },
    },
    {
      id: "wYI8x4iwkAg",
      slug: "a-winding-road-in-the-middle-of-a-forest-wYI8x4iwkAg",
      created_at: "2024-01-24T19:44:18Z",
      updated_at: "2024-01-28T18:17:07Z",
      promoted_at: "2024-01-28T18:17:07Z",
      width: 4240,
      height: 2832,
      color: "#262626",
      blur_hash: "LI9jy2Io01?ax]WBRPtQxuayRjof",
      description: null,
      alt_description: "a winding road in the middle of a forest",
      breadcrumbs: [],
      urls: {
        raw: "https://images.unsplash.com/photo-1706125356820-e6f5a81bcc83?ixid=M3w1NTk3ODZ8MHwxfGFsbHw3fHx8fHx8Mnx8MTcwNjQ3MDM1Mnw&ixlib=rb-4.0.3",
        full: "https://images.unsplash.com/photo-1706125356820-e6f5a81bcc83?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1NTk3ODZ8MHwxfGFsbHw3fHx8fHx8Mnx8MTcwNjQ3MDM1Mnw&ixlib=rb-4.0.3&q=85",
        regular:
          "https://images.unsplash.com/photo-1706125356820-e6f5a81bcc83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NTk3ODZ8MHwxfGFsbHw3fHx8fHx8Mnx8MTcwNjQ3MDM1Mnw&ixlib=rb-4.0.3&q=80&w=1080",
        small:
          "https://images.unsplash.com/photo-1706125356820-e6f5a81bcc83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NTk3ODZ8MHwxfGFsbHw3fHx8fHx8Mnx8MTcwNjQ3MDM1Mnw&ixlib=rb-4.0.3&q=80&w=400",
        thumb:
          "https://images.unsplash.com/photo-1706125356820-e6f5a81bcc83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NTk3ODZ8MHwxfGFsbHw3fHx8fHx8Mnx8MTcwNjQ3MDM1Mnw&ixlib=rb-4.0.3&q=80&w=200",
        small_s3:
          "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1706125356820-e6f5a81bcc83",
      },
      links: {
        self: "https://api.unsplash.com/photos/a-winding-road-in-the-middle-of-a-forest-wYI8x4iwkAg",
        html: "https://unsplash.com/photos/a-winding-road-in-the-middle-of-a-forest-wYI8x4iwkAg",
        download:
          "https://unsplash.com/photos/wYI8x4iwkAg/download?ixid=M3w1NTk3ODZ8MHwxfGFsbHw3fHx8fHx8Mnx8MTcwNjQ3MDM1Mnw",
        download_location:
          "https://api.unsplash.com/photos/wYI8x4iwkAg/download?ixid=M3w1NTk3ODZ8MHwxfGFsbHw3fHx8fHx8Mnx8MTcwNjQ3MDM1Mnw",
      },
      likes: 11,
      liked_by_user: false,
      current_user_collections: [],
      sponsorship: null,
      topic_submissions: {},
      user: {
        id: "plx1zgl86Bc",
        updated_at: "2024-01-28T18:17:07Z",
        username: "joshhild",
        name: "Josh Hild",
        first_name: "Josh",
        last_name: "Hild",
        twitter_username: "Josh_Hild",
        portfolio_url: "https://fineartamerica.com/profiles/josh-hild/shop",
        bio: "Digital Nomad. Any donations are appreciated!\r\n",
        location: "Seattle",
        links: [Object],
        profile_image: [Object],
        instagram_username: "joshhild",
        total_collections: 11,
        total_likes: 9,
        total_photos: 1407,
        total_promoted_photos: 508,
        accepted_tos: true,
        for_hire: true,
        social: [Object],
      },
    },
    {
      id: "uLg7gWG1HL8",
      slug: "a-close-up-of-a-sign-on-a-ceiling-uLg7gWG1HL8",
      created_at: "2024-01-25T21:08:15Z",
      updated_at: "2024-01-28T18:16:41Z",
      promoted_at: "2024-01-28T18:16:41Z",
      width: 3455,
      height: 4977,
      color: "#262626",
      blur_hash: "LYBN1ea}M{RjoeWBWBWB00ofxut7",
      description: null,
      alt_description: "a close up of a sign on a ceiling",
      breadcrumbs: [],
      urls: {
        raw: "https://images.unsplash.com/photo-1706216728364-94edc90d9470?ixid=M3w1NTk3ODZ8MHwxfGFsbHw4fHx8fHx8Mnx8MTcwNjQ3MDM1Mnw&ixlib=rb-4.0.3",
        full: "https://images.unsplash.com/photo-1706216728364-94edc90d9470?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1NTk3ODZ8MHwxfGFsbHw4fHx8fHx8Mnx8MTcwNjQ3MDM1Mnw&ixlib=rb-4.0.3&q=85",
        regular:
          "https://images.unsplash.com/photo-1706216728364-94edc90d9470?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NTk3ODZ8MHwxfGFsbHw4fHx8fHx8Mnx8MTcwNjQ3MDM1Mnw&ixlib=rb-4.0.3&q=80&w=1080",
        small:
          "https://images.unsplash.com/photo-1706216728364-94edc90d9470?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NTk3ODZ8MHwxfGFsbHw4fHx8fHx8Mnx8MTcwNjQ3MDM1Mnw&ixlib=rb-4.0.3&q=80&w=400",
        thumb:
          "https://images.unsplash.com/photo-1706216728364-94edc90d9470?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NTk3ODZ8MHwxfGFsbHw4fHx8fHx8Mnx8MTcwNjQ3MDM1Mnw&ixlib=rb-4.0.3&q=80&w=200",
        small_s3:
          "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1706216728364-94edc90d9470",
      },
      links: {
        self: "https://api.unsplash.com/photos/a-close-up-of-a-sign-on-a-ceiling-uLg7gWG1HL8",
        html: "https://unsplash.com/photos/a-close-up-of-a-sign-on-a-ceiling-uLg7gWG1HL8",
        download:
          "https://unsplash.com/photos/uLg7gWG1HL8/download?ixid=M3w1NTk3ODZ8MHwxfGFsbHw4fHx8fHx8Mnx8MTcwNjQ3MDM1Mnw",
        download_location:
          "https://api.unsplash.com/photos/uLg7gWG1HL8/download?ixid=M3w1NTk3ODZ8MHwxfGFsbHw4fHx8fHx8Mnx8MTcwNjQ3MDM1Mnw",
      },
      likes: 4,
      liked_by_user: false,
      current_user_collections: [],
      sponsorship: null,
      topic_submissions: { "street-photography": [Object] },
      user: {
        id: "shSr0XkuE5w",
        updated_at: "2024-01-28T19:00:11Z",
        username: "cloudett",
        name: "Laura Cleffmann",
        first_name: "Laura",
        last_name: "Cleffmann",
        twitter_username: null,
        portfolio_url: "https://www.instagram.com/cl0udett/",
        bio: "Hi, my name is Laura.\r\nI discovered photography as my hobby.  🌙🦋☯️",
        location: "Germany,Bochum",
        links: [Object],
        profile_image: [Object],
        instagram_username: "cl0udett",
        total_collections: 11,
        total_likes: 1365,
        total_photos: 462,
        total_promoted_photos: 23,
        accepted_tos: true,
        for_hire: true,
        social: [Object],
      },
    },
    {
      id: "FB7hEpk0fn0",
      slug: "a-person-holding-a-small-white-flower-in-their-hand-FB7hEpk0fn0",
      created_at: "2024-01-24T17:13:47Z",
      updated_at: "2024-01-28T18:16:21Z",
      promoted_at: "2024-01-28T18:16:21Z",
      width: 6016,
      height: 4016,
      color: "#262626",
      blur_hash: "L87^*+?H0L4.E1NGs:%14.Rj?H%3",
      description: null,
      alt_description: "a person holding a small white flower in their hand",
      breadcrumbs: [],
      urls: {
        raw: "https://images.unsplash.com/photo-1706115963936-43054590f598?ixid=M3w1NTk3ODZ8MHwxfGFsbHw5fHx8fHx8Mnx8MTcwNjQ3MDM1Mnw&ixlib=rb-4.0.3",
        full: "https://images.unsplash.com/photo-1706115963936-43054590f598?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1NTk3ODZ8MHwxfGFsbHw5fHx8fHx8Mnx8MTcwNjQ3MDM1Mnw&ixlib=rb-4.0.3&q=85",
        regular:
          "https://images.unsplash.com/photo-1706115963936-43054590f598?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NTk3ODZ8MHwxfGFsbHw5fHx8fHx8Mnx8MTcwNjQ3MDM1Mnw&ixlib=rb-4.0.3&q=80&w=1080",
        small:
          "https://images.unsplash.com/photo-1706115963936-43054590f598?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NTk3ODZ8MHwxfGFsbHw5fHx8fHx8Mnx8MTcwNjQ3MDM1Mnw&ixlib=rb-4.0.3&q=80&w=400",
        thumb:
          "https://images.unsplash.com/photo-1706115963936-43054590f598?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NTk3ODZ8MHwxfGFsbHw5fHx8fHx8Mnx8MTcwNjQ3MDM1Mnw&ixlib=rb-4.0.3&q=80&w=200",
        small_s3:
          "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1706115963936-43054590f598",
      },
      links: {
        self: "https://api.unsplash.com/photos/a-person-holding-a-small-white-flower-in-their-hand-FB7hEpk0fn0",
        html: "https://unsplash.com/photos/a-person-holding-a-small-white-flower-in-their-hand-FB7hEpk0fn0",
        download:
          "https://unsplash.com/photos/FB7hEpk0fn0/download?ixid=M3w1NTk3ODZ8MHwxfGFsbHw5fHx8fHx8Mnx8MTcwNjQ3MDM1Mnw",
        download_location:
          "https://api.unsplash.com/photos/FB7hEpk0fn0/download?ixid=M3w1NTk3ODZ8MHwxfGFsbHw5fHx8fHx8Mnx8MTcwNjQ3MDM1Mnw",
      },
      likes: 4,
      liked_by_user: false,
      current_user_collections: [],
      sponsorship: null,
      topic_submissions: {},
      user: {
        id: "tBplnoPr52M",
        updated_at: "2024-01-28T19:23:57Z",
        username: "cherstve_pechivo",
        name: "Liana S",
        first_name: "Liana",
        last_name: "S",
        twitter_username: null,
        portfolio_url: null,
        bio: "Hello! I love the beauty of this world and want to share it with you. Look",
        location: "Kyiv, Ukraine",
        links: [Object],
        profile_image: [Object],
        instagram_username: "cherstve_pechivo",
        total_collections: 8,
        total_likes: 189,
        total_photos: 70,
        total_promoted_photos: 3,
        accepted_tos: true,
        for_hire: false,
        social: [Object],
      },
    },
    {
      id: "WYmNFpyKn1o",
      slug: "a-restaurant-with-tables-chairs-and-plants-WYmNFpyKn1o",
      created_at: "2024-01-27T13:39:50Z",
      updated_at: "2024-01-28T08:44:15Z",
      promoted_at: "2024-01-28T08:44:15Z",
      width: 5623,
      height: 3749,
      color: "#26260c",
      blur_hash: "LDCP|jE000%g^*IVD*nhs;oeWBtR",
      description: null,
      alt_description: "a restaurant with tables, chairs, and plants",
      breadcrumbs: [],
      urls: {
        raw: "https://images.unsplash.com/photo-1706362723628-60e8f1929ffe?ixid=M3w1NTk3ODZ8MHwxfGFsbHwxMHx8fHx8fDJ8fDE3MDY0NzAzNTJ8&ixlib=rb-4.0.3",
        full: "https://images.unsplash.com/photo-1706362723628-60e8f1929ffe?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1NTk3ODZ8MHwxfGFsbHwxMHx8fHx8fDJ8fDE3MDY0NzAzNTJ8&ixlib=rb-4.0.3&q=85",
        regular:
          "https://images.unsplash.com/photo-1706362723628-60e8f1929ffe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NTk3ODZ8MHwxfGFsbHwxMHx8fHx8fDJ8fDE3MDY0NzAzNTJ8&ixlib=rb-4.0.3&q=80&w=1080",
        small:
          "https://images.unsplash.com/photo-1706362723628-60e8f1929ffe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NTk3ODZ8MHwxfGFsbHwxMHx8fHx8fDJ8fDE3MDY0NzAzNTJ8&ixlib=rb-4.0.3&q=80&w=400",
        thumb:
          "https://images.unsplash.com/photo-1706362723628-60e8f1929ffe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NTk3ODZ8MHwxfGFsbHwxMHx8fHx8fDJ8fDE3MDY0NzAzNTJ8&ixlib=rb-4.0.3&q=80&w=200",
        small_s3:
          "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1706362723628-60e8f1929ffe",
      },
      links: {
        self: "https://api.unsplash.com/photos/a-restaurant-with-tables-chairs-and-plants-WYmNFpyKn1o",
        html: "https://unsplash.com/photos/a-restaurant-with-tables-chairs-and-plants-WYmNFpyKn1o",
        download:
          "https://unsplash.com/photos/WYmNFpyKn1o/download?ixid=M3w1NTk3ODZ8MHwxfGFsbHwxMHx8fHx8fDJ8fDE3MDY0NzAzNTJ8",
        download_location:
          "https://api.unsplash.com/photos/WYmNFpyKn1o/download?ixid=M3w1NTk3ODZ8MHwxfGFsbHwxMHx8fHx8fDJ8fDE3MDY0NzAzNTJ8",
      },
      likes: 25,
      liked_by_user: false,
      current_user_collections: [],
      sponsorship: null,
      topic_submissions: {},
      user: {
        id: "BdLxrRuTVwY",
        updated_at: "2024-01-28T18:11:20Z",
        username: "elmartinbaron",
        name: "Martin Baron",
        first_name: "Martin",
        last_name: "Baron",
        twitter_username: null,
        portfolio_url: "http://martinbaron.fr",
        bio: "Taking pictures for others to enjoy. If you like my work feel free to follow me on Instagram :-)",
        location: "Saumur",
        links: [Object],
        profile_image: [Object],
        instagram_username: "elmartinbaron",
        total_collections: 0,
        total_likes: 61,
        total_photos: 320,
        total_promoted_photos: 50,
        accepted_tos: true,
        for_hire: true,
        social: [Object],
      },
    },
  ];

  const reducedPosts = savedPosts.map((post) => {
    const reducedPost = {
      id: post.id,
      user: post.user.name,
      caption: post.alt_description,
      image: post.urls.regular,
      likes: post.likes,
    };

    return reducedPost;
  });

  return reducedPosts;
}

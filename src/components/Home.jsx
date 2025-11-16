import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";


const Home = ({ news = [], category, searchQuery }) => {
  const headerText = searchQuery
    ? `Search results for "${searchQuery}"`
    : category && category !== "general"
    ? `Category: ${category.charAt(0).toUpperCase() + category.slice(1)}`
    : "Top News";

  return (
    <div className="bg-gray-100 p-5">
   
      <h2 className="text-2xl font-semibold text-teal-500 mb-4">{headerText}</h2>

      <div className="flex flex-wrap -m-2">
        {news.map((item, index) => (
          <div key={item.url || index} className="w-full md:w-1/2 lg:w-1/3 p-2">
            <Card className="h-full flex flex-col">
              
             
              <div className="flex items-center gap-2 px-4 py-4">
            
                {item.source_info?.img || item.image_url ? (
                  <img
                    src={item.source_info?.img || item.image_url}
                    alt={item.source_id || item.source?.name || "Logo"}
                    className="h-6 w-6 rounded-full object-cover"
                  />
                ) : (
                  <div className="h-6 w-6 bg-gray-300 rounded-full flex items-center justify-center text-white text-xs">
                    {item.source_id?.charAt(0) || "?"}
                  </div>
                )}

       
                <h1 className="text-blue-500 text-sm font-normal">
                  {item.source_id || item.source?.name || "Unknown Source"}
                </h1>
              </div>

              {item.image_url ? (
                <CardMedia
                  component="img" image={item.image_url}   alt={item.title}  className="rounded-lg p-2 w-full h-48 object-cover"
                />
              ) : (
                <div className="bg-gray-300 h-48 flex items-center justify-center text-gray-500">
                  No Image
                </div>
              )}

              <CardContent className="flex-1">
                <h2 component="p" className="text-black text-lg font-semibold">
                  {item.title}
                </h2>

                <h2 component="p" className="text-gray-500 text-sm mt-4">
                  {item.pubDate ? new Date(item.pubDate).toLocaleString() : "Unknown Date"}
                </h2>
              </CardContent>

              <CardActions>
                <Button size="small" href={item.link}  target="_blank"  className="text-black" >
                  Read More
                </Button>
              </CardActions>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

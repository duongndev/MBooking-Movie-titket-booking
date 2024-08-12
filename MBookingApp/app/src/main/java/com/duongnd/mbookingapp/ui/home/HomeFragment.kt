package com.duongnd.mbookingapp.ui.home

import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.fragment.app.Fragment
import androidx.navigation.fragment.findNavController
import androidx.viewpager2.widget.ViewPager2
import com.duongnd.mbookingapp.R
import com.duongnd.mbookingapp.data.model.MovieModel
import com.duongnd.mbookingapp.databinding.FragmentHomeBinding
import com.duongnd.mbookingapp.ui.adapter.ComingSoonAdapter
import com.duongnd.mbookingapp.ui.adapter.NowPlayingAdapter
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.Job
import kotlinx.coroutines.delay
import kotlinx.coroutines.isActive
import kotlinx.coroutines.launch
import kotlin.math.abs

class HomeFragment : Fragment() {

    private var _binding: FragmentHomeBinding? = null
    private val binding get() = _binding!!

    private lateinit var nowPlayingAdapter: NowPlayingAdapter
    private lateinit var comingSoonAdapter: ComingSoonAdapter
    private var movieModelList: MutableList<MovieModel> = mutableListOf()
    private var job: Job? = null
    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        // Inflate the layout for this fragment
        _binding = FragmentHomeBinding.inflate(inflater, container, false)
        binding.recyclerViewComingSoon.setHasFixedSize(true)
        movieModelList = mutableListOf()

        comingSoonAdapter = ComingSoonAdapter(movieModelList, requireContext())
        binding.recyclerViewComingSoon.adapter = comingSoonAdapter
        return binding.root
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)

        val movieList = listOf(
            MovieModel(
                1,
                "Avengers - Infinity War",
                "2h 30m",
                "Action, Adventure, Sci-Fi",
                "8.5",
                "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_.jpg"
            ),
            MovieModel(
                2,
                "Avengers - Infinity War",
                "2h 30m",
                "Action, Adventure, Sci-Fi",
                "8.5",
                "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_.jpg"
            ),
            MovieModel(
                3,
                "Avengers - Infinity War",
                "2h 30m",
                "Action, Adventure, Sci-Fi",
                "8.5",
                "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_.jpg"
            ),
            MovieModel(
                4,
                "Avengers - Infinity War",
                "2h 30m",
                "Action, Adventure, Sci-Fi",
                "8.5",
                "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_.jpg"
            ),
            MovieModel(
                5,
                "Avengers - Infinity War",
                "2h 30m",
                "Action, Adventure, Sci-Fi",
                "8.5",
                "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_.jpg"
            ),
            MovieModel(
                6,
                "Avengers - Infinity War",
                "2h 30m",
                "Action, Adventure, Sci-Fi",
                "8.5",
                "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_.jpg"
            ),
            MovieModel(
                7,
                "Avengers - Infinity War",
                "2h 30m",
                "Action, Adventure, Sci-Fi",
                "8.5",
                "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_.jpg"
            ),
            MovieModel(
                8,
                "Avengers - Infinity War",
                "2h 30m",
                "Action, Adventure, Sci-Fi",
                "8.5",
                "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_.jpg"
            ),
            MovieModel(
                9,
                "Avengers - Infinity War",
                "2h 30m",
                "Action, Adventure, Sci-Fi",
                "8.5",
                "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_.jpg"
            ),
            MovieModel(
                10,
                "Avengers - Infinity War",
                "2h 30m",
                "Action, Adventure, Sci-Fi",
                "8.5",
                "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_.jpg"
            ),
        )
        nowPlayingAdapter = NowPlayingAdapter(
            movieList,
            requireContext()
        )

        movieModelList.addAll(movieList)
        comingSoonAdapter.notifyDataSetChanged()


        job = CoroutineScope(Dispatchers.Main).launch {
            while (isActive) {
                delay(3000)
                binding.viewPagerNowPlaying.currentItem =
                    (binding.viewPagerNowPlaying.currentItem + 1) % movieList.size
            }
        }

        // clicked item viewpager

        binding.viewPagerNowPlaying.apply {
            clipToPadding = false
            clipChildren = false
            offscreenPageLimit = 1
            setPadding(100, 0, 100, 0)
            adapter = nowPlayingAdapter
            setPageTransformer { page, position ->
                val scaleFactor = 0.85f + (1 - abs(position)) * 0.15f
                page.scaleY = scaleFactor
                page.scaleX = scaleFactor

                val alphaFactor = 0.5f + (1 - abs(position)) * 0.5f
                page.alpha = alphaFactor

                // Optional: Adjust translation if you want to offset the pages
                page.translationX = -position * page.width / 4
            }

        }

        nowPlayingAdapter.clickToDetail = {
            findNavController().navigate(
                R.id.action_homeFragment_to_movieDetailFragment
            )
        }

    }


    override fun onDestroyView() {
        super.onDestroyView()
        _binding = null
        job?.cancel()
    }

}